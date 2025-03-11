import React, { useState } from "react";
import { Button, DatePicker, Form, Input, Radio, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDebtorCreate } from "../debtorCreate/service/mutation/useDebtorCreate";
import { useParams } from "react-router-dom";

type SizeType = Parameters<typeof Form>[0]["size"];

export const Debt: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const { id } = useParams();

  const { mutate } = useDebtorCreate();

  

  const sumbit = () => {};
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Sana">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Qarz">
        <Input placeholder="1 200 300 som..." />
      </Form.Item>
      <Form.Item label="Muddat">
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Search to Select"
          optionFilterProp="label"
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            { value: "1", label: "1 oy" },
            { value: "2", label: "2 oy" },
            { value: "3", label: "3 oy" },
            { value: "4", label: "4 oy" },
            { value: "5", label: "5 oy" },
            { value: "6", label: "6 oy" },
          ]}
        />
      </Form.Item>
      <Form.Item label="Eslatma qoshish">
        <Input.TextArea style={{ width: "400px", height: "100px" }} />
      </Form.Item>

      <Form.Item label="Rasm yuklash">
        <Upload
          listType="picture-card"
          multiple
          maxCount={3}
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Rasm qo‘shish</Button>
        </Upload>
      </Form.Item>

      <Form.Item label="Button">
        <Button type="primary">Saqlash</Button>
      </Form.Item>
    </Form>
  );
};
