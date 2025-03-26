import React from "react";

export interface Product {
  img: string;
  info: string;
  price: string;
}
const ProductCart = ({ img, info, price }: Product) => {
  return (
    <div className="bg-[#fbfbfb]">
      <img src={img} alt="img" className="p-[20px]" />
      <p className="pb-[6px] pt-[12px] pl-[10px] text-[16px]">{info}</p>
      <p className="text-[#46a358] pl-[10px] pb-[10px] text-[18px]">{price}</p>
    </div>
  );
};

export default ProductCart;
