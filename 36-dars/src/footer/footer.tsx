import React from "react";
import FooterCart from "@/app/_components/footer-cart";
import { footerData } from "@/data/footer-data";
import logo from "../app/assets/header/logo.svg";
import logo4 from "../app/assets/footer/logo4.svg";
import logo5 from "../app/assets/footer/logo5.svg";
import logo6 from "../app/assets/footer/logo6.svg";
import face from "../app/assets/footer/face.svg";
import insta from "../app/assets/footer/insta.svg";
import link from "../app/assets/footer/link.svg";
import twi from "../app/assets/footer/twi.svg";
import you from "../app/assets/footer/you-tube.svg";
import logo7 from "../app/assets/footer/logo7.svg";

export const Footer = () => {
  return (
    <div className="container">
      <div className="flex justify-between gap-[62px] p-[25px] bg-[#fbfbfb]">
        {footerData.map((item) => (
          <FooterCart
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            text={item.text}
          />
        ))}
        <div className="">
          <h2 className="text-[18px] pb-[18px]">
            Would you like to join newsletters?
          </h2>
          <input
            type="text"
            className="pt-[12px] pb-[12px] pl-[11px] text-[18px] pr-[86px] items-center rounded-[10px] bg-white border-white"
            placeholder="enter your email adress"
          />
          <button className="pt-[12px] pb-[12px] pl-[26px] pr-[26px] bg-[#46a358] rounded-[10px] text-[#fff]">
            join
          </button>
          <p className="text-[13px] pt-[17px]">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>
      <div className="bg-green-100 flex gap-[60px] p-[25px]">
        <img src={logo.src} alt="img" />
        <div className="flex gap-[10px] ">
          <img src={logo4.src} alt="img" />
          <p className="text-[14px]">
            70 West Buckingham Ave. Farmingdale, NY 11735
          </p>
        </div>
        <div className="flex gap-[10px]">
          <img src={logo5.src} alt="img" />
          <p className="text-[14px]">contact@greenshop.com</p>
        </div>

        <div className="flex gap-[10px]">
          <img src={logo6.src} alt="img" />
          <p className="text-[14px]">+88 01911 717 490</p>
        </div>
      </div>
      <div className="flex gap-[173px] pt-[32px] pb-[32px] pl-[25px] pr-[25px]">
        <ul>
          <li className="text-[#3d3d3] text-[18px] pb-[10px]">My Account</li>
          <li className="text-[14px] pb-[10px]">My Account</li>
          <li className="text-[14px] pb-[10px]"> Our stores</li>
          <li className="text-[14px] pb-[10px]">Contact us</li>
          <li className="text-[14px] pb-[10px]">Career</li>
          <li className="text-[14px] pb-[10px]">Specials</li>
        </ul>
        <ul>
          <li className="text-[#3d3d3] text-[18px] pb-[10px]">Help & Guide</li>
          <li className="text-[14px] pb-[10px]">Help Center</li>
          <li className="text-[14px] pb-[10px]">Shipping & Delivery</li>
          <li className="text-[14px] pb-[10px]">How to Buy </li>
          <li className="text-[14px] pb-[10px]">Product Policy</li>
          <li className="text-[14px] pb-[10px]">How to Return</li>
        </ul>
        <ul>
          <li className="text-[#3d3d3] text-[18px] pb-[10px]">Categories</li>
          <li className="text-[14px] pb-[10px]">House Plants </li>
          <li className="text-[14px] pb-[10px]">Potter Plants</li>
          <li className="text-[14px] pb-[10px]">Seeds</li>
          <li className="text-[14px] pb-[10px]">Small Plants</li>
          <li className="text-[14px] pb-[10px]">Accessories</li>
        </ul>
        <div>
          <h3 className="text-[18px] pb-[10px]">Social Media</h3>
          <div className="flex gap-[10px] pb-[33px]">
            <img
              src={face.src}
              alt="img"
              className="p-[7px] border-green-500 bg-green-100 rounded-[10px]"
            />
            <img
              src={insta.src}
              alt="img"
              className="p-[7px] border-green-500 bg-green-100 rounded-[10px]"
            />
            <img
              src={twi.src}
              alt="img"
              className="p-[7px] border-green-500 bg-green-100 rounded-[10px] "
            />
            <img
              src={link.src}
              alt="img"
              className="p-[7px] border-green-500 bg-green-100 rounded-[10px]"
            />
            <img
              src={you.src}
              alt="img"
              className="p-[7px] border-green-500 bg-green-100 rounded-[10px]"
            />
          </div>
          <div>
            <h3 className="text-[18px] pb-[13px]">We accept</h3>
            <img src={logo7.src} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
