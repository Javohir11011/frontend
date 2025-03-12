import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { UpdateDebtor, useEditDebtor } from "../service/mutation/useDebtorEdit";
import { useParams } from "react-router-dom";

export const EditDebtor: React.FC = () => {
  const { mutate } = useEditDebtor();

  const { id } = useParams();

  const onFinish = (values: UpdateDebtor) => {
    if (!id) {
      message.error("id olinmadi!!!");
      return;
    }
    mutate(
      { id, data: values },
      {
        onSuccess: () => {
          message.success("Ma'lumotlar saqlandi!");
        },
        onError: () => {
          message.error("Xatolik yuz berdi!");
        },
      }
    );
  };

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

        <Button type="primary" htmlType="submit">
          Saqlash
        </Button>
      </Form>

      <img
        src="https://t4.ftcdn.net/jpg/05/31/37/89/360_F_531378938_xwRjN9e5ramdPj2coDwHrwk9QHckVa5Y.jpg"
        alt="img"
      />
    </div>
  );
};
