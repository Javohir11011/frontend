import React from "react";
import logo1 from "../assets/header/logo1.svg";
import logo2 from "../assets/header/logo2.svg";
import logo3 from "../assets/header/logo3.svg";

export const Header = () => {
  return (
    <div className="container">
      <div className="flex gap-[40px] justify-between items-center pt-[24px]">
        <img src={logo1} alt="img" />
        <ul className="flex text-[16px] gap-[24px]">
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
        <input
          type="text"
          placeholder="Search for product"
          className="p-[13px] w-[577px]"
        />
        <div className="flex gap-[24px]">
          <img src={logo2} alt="img" />
          <img src={logo3} alt="img" />
        </div>
      </div>
      <div className="header__block2"></div>
    </div>
  );
};
