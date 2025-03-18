import React from "react";
import uccel from "../../assets/payments/uccel.svg";
import beeline from "../../assets/payments/beeline.svg";
import mobi from "../../assets/payments/mobi.svg";
import telecom from "../../assets/payments/telecom.svg";

const PaymentS = () => {
  return (
    <div className="container">
      <div className="flex pt-[50px] gap-[145px]">
        <ul className="w-[300px] rounded-[7px]">
          <li className="text-[14px] pb-[25px] p-[30px]">Uyali aloqa</li>
          <li className="text-[14px] pb-[25px] p-[30px]">Internet</li>
          <li className="text-[14px] pb-[25px] p-[30px]">Kommunal Xizmatlar</li>
          <li className="text-[14px] pb-[25px] p-[30px] bg-gray-100">
            To’lovlar tarixi
          </li>
        </ul>

        <div className="w-[800px] pb-[140px]">
          <h2 className="text-[20px] pb-[5px]">To’lov xizmatlari</h2>
          <p className="text-[14px] pb-[40px]">Uyali aloqa</p>
          <div className="flex gap-[40px] pb-[25px]">
            <img src={uccel.src} alt="img" />
            <img src={beeline.src} alt="img" />
            <img src={mobi.src} alt="img" />
            <img src={telecom.src} alt="img" />
          </div>
          <div className="flex gap-[40px]">
            <img src={uccel.src} alt="img" />
            <img src={beeline.src} alt="img" />
            <img src={mobi.src} alt="img" />
            <img src={telecom.src} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentS;
