import React from "react";
import { Table, Button, Popconfirm } from "antd";
import type { TableProps } from "antd";
import { useGetAllDebtor } from "../service/query/useGetAllDebtor";
import { useDeleteDebtor } from "../service/mutation/useDeleteDebtor";
import addDebt from "../../../assets/home/debtor-create.svg";
import { Link, useNavigate } from "react-router-dom";

interface DataType {
  key: string;
  id: string;
  name: string;
  address: string;
  description: string;
  phone: string;
  like: boolean;
}

export const GetAllDebtor: React.FC = () => {
  const navigate = useNavigate();
  const { data } = useGetAllDebtor();
  const { mutate: deleteDebtor } = useDeleteDebtor();

  const formattedData: DataType[] = Array.isArray(data)
    ? data.map((item) => ({
        key: item.id,
        id: item.id,
        name: item.full_name,
        address: item.address,
        description: item.description,
        phone: item.phoneNumbers?.map((p) => p.phone_number).join(", ") || "",
        like: item.is_liked ?? false,
      }))
    : [];

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      render: (full_name, record) => (
        <Link to={`/create-debt/${record.id}`}>{full_name}</Link>
      ),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Like",
      dataIndex: "like",
      key: "like",
      render: (like: boolean) => (like ? "✅" : "❌"),
    },
    {
      title: "Amallar",
      key: "actions",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            style={{ marginRight: 8 }}
            onClick={() => navigate(`/edit-debtor/${record.id}`)}
          >
            Update
          </Button>
          <Popconfirm
            title="Rostdan ham o‘chirmoqchimisiz?"
            onConfirm={() => deleteDebtor(record.id)}
            okText="Ha"
            cancelText="Yo‘q"
          >
            <Button type="default" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        style={{
          width: "100%",
          height: "40px",
          paddingLeft: "10px",
          borderRadius: "12px",
        }}
        placeholder="Mijozlarni qidirish..."
      />
      <Table<DataType> columns={columns} dataSource={formattedData} />
      <Link to={"/create"}>
        <img
          src={addDebt}
          alt="Add Debt"
          style={{
            position: "absolute",
            bottom: "-25%",
            right: "10px",
            width: "150px",
            height: "100px",
          }}
        />
      </Link>
    </div>
  );
};
