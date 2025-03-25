import React from "react";

export interface Product {
  img: string;
  info: string;
  price: string;
}
const ProductCart = ({ img, info, price }: Product) => {
  return (
    <div className="bg-[#fbfbfb]">
      <img
        src={img}
        alt="img"
        className="pr-[4px] pl-[4px] pt-[34px] pb-[19px]"
      />
      <p className="pb-[6px] pt-[12px] text-[16px]">{info}</p>
      <p className="text-[#46a358] text-[18px]">{price}</p>
    </div>
  );
};

export default ProductCart;
