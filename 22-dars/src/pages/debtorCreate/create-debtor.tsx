import React, { useState } from "react";
import { Button, Form, Input, message, Upload } from "antd";
import type { UploadProps } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  DebtorType,
  useDebtorCreate,
} from "./service/mutation/useDebtorCreate";

type FileType = Parameters<UploadProps["beforeUpload"]>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const CreateDebtor: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [file, setFile] = useState<FileType | null>(null);
  const { mutate: createDebtor, isLoading: isCreating } = useDebtorCreate();
  const { mutate: uploadImage, isLoading: isUploading } = useDebtorCreate();

  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("Faqat JPG/PNG fayllar yuklanadi!");
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Fayl hajmi 2MB dan kichik bo‘lishi kerak!");
      return false;
    }
    setFile(file);
    getBase64(file, (url) => setImageUrl(url));
    return false;
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    setLoading(false);
  };

  const onFinish = (values: DebtorType) => {
    if (!file) {
      message.error("Iltimos, rasm yuklang!");
      return;
    }

    createDebtor(values, {
      onSuccess: (data) => {
        message.success("Ma'lumotlar saqlandi!");

        const formData = new FormData();
        formData.append("file", file);
        formData.append("debtorId", data.id);

        uploadImage(formData, {
          onSuccess: () => {
            message.success("Rasm yuklandi!");
          },
          onError: () => {
            message.error("Rasm yuklashda xatolik!");
          },
        });
      },
      onError: () => {
        message.error("Xatolik yuz berdi!");
      },
    });
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Form
        name="form_item_path"
        layout="vertical"
        onFinish={onFinish}
        style={{ width: "600px" }}
      >
        <Form.Item name="full_name" label="Ismi *">
          <Input />
        </Form.Item>

        <Form.Item name="phone" label="Phone number">
          <Input />
        </Form.Item>

        <Form.Item name="address" label="Yashash manzili">
          <Input />
        </Form.Item>

        <Form.Item name="description" label="Eslatma">
          <Input />
        </Form.Item>

        <Form.Item name="img" label="Rasm qo‘shish">
          <Upload
            name="avatar"
            listType="picture-card"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          loading={isCreating || isUploading}
        >
          {isCreating || isUploading ? "Yuborilmoqda..." : "Yuborish"}
        </Button>
      </Form>

      <img
        src="https://t4.ftcdn.net/jpg/05/31/37/89/360_F_531378938_xwRjN9e5ramdPj2coDwHrwk9QHckVa5Y.jpg"
        alt="img"
      />
    </div>
  );
};
