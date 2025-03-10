import React, { useState } from "react";
import { Table, Spin } from "antd";
import type { TableProps } from "antd";
import { useGetAllDebtor } from "../service/query/useGetAllDebtor";
import addDebt from "../../../assets/home/debtor-create.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { useSearchDebtor } from "../service/query/useSearchDebtors";

interface DataType {
  key: string;
  name: string;
  address: string;
  description: string;
  like: boolean;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Full Name",
    dataIndex: "name",
    key: "name",
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
];

export const GetAllDebtor: React.FC = () => {
  const { data } = useGetAllDebtor();
  // const [searchD, setSearchD] = useState("");
  // const { search } = useSearchDebtor(searchD);
  // console.log(search);

  // const searchDebtor = (e) => {
  //   setSearchD(e.target.value);
  // };
  const formattedData: DataType[] = Array.isArray(data)
    ? data.map((item) => ({
        key: item.id,
        name: item.full_name,
        address: item.address,
        description: item.description,
        phone: item.phoneNumbers?.map((item) => item.phone_number + ""),
        like: item.is_liked ?? false,
      }))
    : [];

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
        // onChange={(e) => searchDebtor(e)}
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
            cursor: "pointer",
          }}
        />
      </Link>
    </div>
  );
};
