import React from "react";

export interface FooterData {
  id: number;
  img: string;
  title: string;
  text: string;
}
const FooterCart = ({ img, title, text }: FooterData) => {
  return (
    <div className="">
      <img src={img} alt="img" className="pb-[18px]" />
      <h2 className="text-[17px] ob-[9px]">{title}</h2>
      <p className="text-[14px]">{text}</p>
    </div>
  );
};

export default FooterCart;
