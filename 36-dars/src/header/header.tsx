import React from "react";
import logo from "../app/assets/header/logo.svg";
import search from "../app/assets/header/search.svg";
import savat from "../app/assets/header/savat.svg";
import login from "../app/assets/header/login.svg";

export const Header = () => {
  return (
    <div className="container">
      <div className="flex justify-between pt-[30px] pb-[17px] border-b border-b-black">
        <div>
          <img src={logo.src} alt="img" />
        </div>
        <ul className="flex gap-[50px] text-[16px]">
          <li>Home </li>
          <li>Shop</li>
          <li>Plant Care</li>
          <li>Blogs</li>
        </ul>
        <div className="flex items-center gap-[20px]">
          <img src={search.src} alt="img" />
          <img src={savat.src} alt="img" />
          <div className="flex  bg-[#46a358] rounded-[6px] p-[10px]">
            <img src={login.src} alt="login" className="pl-[2px]" />
            <button className="text-[#fff]">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
