import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Upload,
  UploadProps,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { DebType, useCreateDebt } from "./service/mutation/useCreateDebt";

type FileType = Parameters<UploadProps["beforeUpload"]>[0];
type SizeType = Parameters<typeof Form>[0]["size"];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const Debt: React.FC = () => {
  const [componentSize] = useState<SizeType | "default">("default");
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>();

  const { id } = useParams();
  const { mutate } = useCreateDebt();
  const [form] = Form.useForm();

  const beforeUpload = (file: FileType) => {
    setFile(file);
    getBase64(file, (url) => setImageUrl(url));
    return false;
  };

  const onFinish = (values: DebType) => {
    if (!file) {
      message.error("Iltimos, rasm yuklang!");
      return;
    }

    const dataToSend = {
      debtor_id: id,
      debt_date: values.debt_date
        ? values.debt_date.format("YYYY-MM-DD")
        : null,
      debt_sum: parseInt(values.debt_sum),
      debt_period: parseInt(values.debt_period, 10),
      description: values.description || null,
      img: file,
    };

    mutate(dataToSend, {
      onSuccess: () => {
        message.success("Ma'lumotlar saqlandi!");

        form.resetFields();
        setFile(null);
        setImageUrl(undefined);

        setTimeout(() => {
          form.setFieldsValue({
            debt_date: null,
            debt_sum: "",
            debt_period: undefined,
            description: "",
          });
        }, 0);
      },
      onError: (error) => {
        console.error("Xatolik:", error?.response?.data || error.message);
        message.error("Xatolik yuz berdi!");
      },
    });
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      size={componentSize as SizeType}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
    >
      <h1 style={{ paddingBottom: "20px" }}>Nasiya yartish</h1>
      <Form.Item label="Sana" name="debt_date">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Qarz" name="debt_sum">
        <Input placeholder="1 200 300 som..." />
      </Form.Item>
      <Form.Item label="Muddat" name="debt_period">
        <Select
          style={{ width: 200 }}
          options={[
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
            { value: 6 },
          ]}
        />
      </Form.Item>
      <Form.Item label="Eslatma qoshish" name="description">
        <Input.TextArea style={{ width: "400px", height: "100px" }} />
      </Form.Item>
      <Form.Item label="Rasm yuklash">
        <Upload
          listType="picture-card"
          multiple={false}
          maxCount={1}
          beforeUpload={beforeUpload}
        >
          <Button icon={<UploadOutlined />}>Rasm qo‘shish</Button>
        </Upload>
      </Form.Item>
      <Form.Item label="Button">
        <Button type="primary" htmlType="submit">
          Saqlash
        </Button>
      </Form.Item>
    </Form>
  );
};
