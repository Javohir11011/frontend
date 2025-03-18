import React from "react";
interface Product {
  id: number;
  productImg: string;
  info: string;
  price: string;
  skindka: string;
  logo: string;
  add: string;
}
const Product = ({ productImg, info, price, skindka, logo, add }: Product) => {
  return (
    <div className=" bg-white w-[264px] pb-[21px] pl-[10px] pr-[10px] rounded-[7px] ">
      <img src={productImg} alt="img" className="pl-[1px] pr-[1px] " />
      <p className="pb-[13px] ">{info}</p>
      <div className="flex gap-[12px] pb-[16px]">
        <p>{price}</p>
        <p>{skindka}</p>
      </div>
      <div className="pt-[10px] pb-[20px] pl-[74px] pr-[74px] flex gap-[10px] bg-gray-100 rounded-[7px]">
        <img src={logo} alt="img" />
        <button>{add}</button>
      </div>
    </div>
  );
};

export default Product;
