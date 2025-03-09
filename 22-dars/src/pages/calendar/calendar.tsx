import React from "react";
import type { CalendarProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import { useGetMontlyAmount } from "./service/query/useGetMonlyAmount";
import { useGetDeilyDebt } from "./service/query/useDeilyDent";

// const getListData = (value: Dayjs) => {
//   let listData: { type: string; content: string }[] = []; // Specify the type of listData
//   switch (value.date()) {
//     case 8:
//       listData = [
//         { type: "warning", content: "This is warning event." },
//         { type: "success", content: "This is usual event." },
//       ];
//       break;
//     case 10:
//       listData = [
//         { type: "warning", content: "This is warning event." },
//         { type: "success", content: "This is usual event." },
//         { type: "error", content: "This is error event." },
//       ];
//       break;
//     case 15:
//       listData = [
//         { type: "warning", content: "This is warning event" },
//         { type: "success", content: "This is very long usual event......" },
//         { type: "error", content: "This is error event 1." },
//         { type: "error", content: "This is error event 2." },
//         { type: "error", content: "This is error event 3." },
//         { type: "error", content: "This is error event 4." },
//       ];
//       break;
//     default:
//   }
//   return listData || [];
// };

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

export const CalendarDebtor: React.FC = () => {
  const { data, isLoading, isError } = useGetMontlyAmount();
  const { data: data2 } = useGetDeilyDebt("2025-04-09");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  const monthCellRender = (value: Dayjs) => {
    const month = value.format("YYYY-MM"); // Masalan: "2025-03"

    const monthAmount = data?.[month] || 0;

    return monthAmount ? (
      <div className="notes-month">
        <section>{monthAmount.toLocaleString()} so'm</section>
        <span>Oylik summa</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    return (
      <ul className="events">
        <li>
          <Badge status="success" text="qarz" />
        </li>
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          background: "#f5f5f5",
          textAlign: "center",
          marginBottom: "10px",
          fontSize: "26px",
          fontWeight: "bold",
          borderRadius: "8px",
        }}
      >
        <div style={{ fontSize: "18px" }}>Umumiy summasi</div>
        {data?.amount.toLocaleString()} so'm
      </div>

      <Calendar cellRender={cellRender} />
      <div>
        <h3 style={{ marginBottom: "22px", alig: "center" }}>
          Qarzdorlar ro‘yxati:
        </h3>
        {data2?.debtors?.map((debtor) => (
          <div key={debtor.full_name} style={{ marginBottom: "10px", width:"100%", height:"100px"}}>
            <strong style={{ fontSize: "30px", display: "block" }}>
              {debtor.full_name}
            </strong>
            <span style={{ fontSize: "20px", color: "#444" }}>
              UZS {debtor.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
