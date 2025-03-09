import { useNavigate } from "react-router-dom";
import personLogo from "../../../assets/home/person-logo.svg";
import calendar from "../../../assets/home/calendar.svg";
import Title from "antd/es/typography/Title";
import hamyon from "../../../assets/home/hamyon.svg";
import plus from "../../../assets/home/plus.svg";
import { useGetAllDebtor } from "../service/query/useGetAllStoreDebtor";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { use, useState } from "react";
import { useDebtprCount } from "../service/query/useDebtorCount";

export const Home = () => {
  const { data, isLoading } = useGetAllDebtor();
  const { data: data2 } = useDebtprCount();

  const navigate = useNavigate();
  const sumbit = () => {
    navigate("/calendar");
  };
  const [state, setStar] = useState(true);

  return (
    <div>
      <div className="home">
        <div className="home__block">
          <img
            src={personLogo}
            alt="img"
            style={{ width: "60px", height: "60px" }}
          />
          <p> Test uchun</p>
        </div>
        <div>
          <img
            src={calendar}
            alt="calendar"
            onClick={sumbit}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          marginTop: "40px",
          background: "#30AF49",
          borderRadius: "15px",
        }}
      >
        <div style={{ position: "relative", paddingTop: "10px" }}>
          <Title style={{ fontSize: "30px", textAlign: "center" }}>
            {state ? `${data?.total_amount}` : "***********"}
          </Title>
          <p style={{ fontSize: "18px", textAlign: "center" }}>
            Umumiy nasiya:
          </p>
          <div
            style={{
              textAlign: "end",
              position: "absolute",
              top: "40px",
              right: "20px",
            }}
            onClick={() => setStar(!state)}
          >
            {state ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "200px",
          paddingTop: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
        }}
      >
        <div
          style={{
            border: "1px solid #ececec",
            borderRadius: "16px",
            background: "white",
            width: "49%",
            height: "100%",
          }}
        >
          <Title
            style={{
              color: "blcak",
              fontSize: "30px",
              width: "220px",
              paddingLeft: "20px",
            }}
          >
            Kechiktirilgan to`lovlar
            <p style={{ paddingTop: "30px", color: "red" }}>0</p>
          </Title>
        </div>
        <div
          style={{
            border: "1px solid #ececec",
            borderRadius: "16px",
            background: "white",
            width: "49%",
            height: "100%",
          }}
        >
          <Title
            style={{
              color: "blcak",
              fontSize: "30px",
              width: "170px",
              paddingLeft: "20px",
            }}
          >
            Mijozlar soni
            <p style={{ paddingTop: "30px", color: "green" }}>
              {data2?.debtorCount}
            </p>
          </Title>
        </div>
      </div>
      <div style={{ paddingTop: "40px" }}>
        <Title style={{ fontSize: "30px" }}>Hamyoningiz</Title>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "80px", paddingTop: "20px" }}>
            <div>
              <img src={hamyon} alt="img" />
            </div>
            <div>
              <p style={{ fontSize: "18px" }}>Hisobingizda</p>
              <Title style={{ fontSize: "30px" }}>300 000 so‘m</Title>
            </div>
          </div>
          <div>
            <img src={plus} alt="img" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "20px",
          }}
        >
          <p style={{ fontSize: "18px" }}>Bu oy uchun to‘lov:</p>
          <p style={{ fontSize: "18px", color: "green" }}>To‘lov qilingan</p>
        </div>
      </div>
    </div>
  );
};
