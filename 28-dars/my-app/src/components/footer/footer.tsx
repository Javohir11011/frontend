import React from "react";
import logo from "../../assets/header/market_logo.svg";
import play_market from "../../assets/footer/play_market.svg";
import appstore from "../../assets/footer/apstore.svg";

export const Footer = () => {
  return (
    <div className="container">
      <div className="flex justify-between pt-[28px] pb-[45px]">
        <div className="">
          <img src={logo.src} alt="img" className="pb-[28px]" />
          <p className="text-[19px]">HilalMart © 2021</p>
          <p className="text-[15px]">Barcha huquqlar kafolatlangan</p>
          <div className="flex gap-[12px] pt-[16px]">
            <img src={play_market.src} alt="img" />
            <img src={appstore.src} alt="img" />
          </div>
        </div>
        <ul>
          <li className="text-[19px]">Foydali havolalar</li>
          <li className="text-[13px] pb-[6px] pt-[6px]">Bosh sahifa</li>
          <li className="text-[13px] pb-[6px]">Yordam kerakmi?</li>
          <li className="text-[13px] pb-[6px]">Foydalanish shartlari</li>
          <li className="text-[13px] pb-[6px]">Maxfiylik siyosati</li>
        </ul>
        <ul>
          <li className="text-[19px] ">Biz haqimizda</li>
          <li className="text-[13px] pb-[6px] pt-[6px] ">
            Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul,
            03113, Crescent Trade ltd
          </li>
          <li className="text-[13px] pb-[6px] ">
            Korxona nomi: Crescent trade llc
          </li>
          <li className="text-[13px] pb-[6px] ">
            Korxona rahbari: DADAJONOV RAKHIMJON
          </li>
          <li className="text-[13px] pb-[6px] ">
            Registratsiya raqami: 433-62-00377
          </li>
          <li className="text-[13px] pb-[6px] ">
            Telefon raqam:1833-2178 02-3670-6808
          </li>
        </ul>
      </div>
    </div>
  );
};
