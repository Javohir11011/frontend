import React from "react";
import market_logo from "../../assets/header/market_logo.svg";
import market_search from "../../assets/header/market_search.svg";
import market_connecting from "../../assets/header/market_connecting.svg";
import market_paymet from "../../assets/header/market_paymet.svg";
import market_flag from "../../assets/header/market_flag.svg";
import market_person from "../../assets/header/market_person.svg";

export const Header = () => {
  return (
    <div className="container">
      <div className="flex items-center gap-[50px] pt-[30px] pb-[21px]">
        <div>
          <img src={market_logo.src} alt="img" />
        </div>
        <div className="flex  w-[711px]  border-[1px] h-[47px] rounded-[7px] gap-[15px] text-green-600 ">
          <img src={market_search.src} alt="img" className="w-[24px] " />
          <input
            type="text"
            className=" w-[655px] rounded-[3px] pl-[20px]"
            placeholder="Qidirish"
          />
        </div>
        <div className="flex gap-[35px]">
          <div className="flex gap-[7px] items-center">
            <img src={market_connecting.src} alt="img" className="w-[14px]" />
            <p>Bog’lanish</p>
          </div>
          <div className="flex gap-[7px] items-center pr-[12px] pl-[12px] pt-[9px] pb-[9px] border-[2px] rounded-[7px] text-green-600">
            <img src={market_paymet.src} alt="img" />
            <p>Payme</p>
          </div>
          <div className="flex p-[12px] gap-[8px] w-[138px]">
            <img src={market_flag.src} alt="" />
            <p>Uz / UZS </p>
          </div>
          <img src={market_person.src} alt="" />
        </div>
      </div>
    </div>
  );
};
