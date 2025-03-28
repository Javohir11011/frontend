"use client";
import React from "react";
import getByIdProduct from "../service/getByIdProduct";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import Link from "next/link";

export interface Product {
  id: string;
  img: string;
  info: string;
  price: string;
}
const ProductCart = ({ img, info, price, id }: Product) => {
  return (
    <div className="bg-[#fbfbfb]">
      <Link href={`/shop/${id}`}>
        <img src={img} alt="img" className="p-[20px] w-[250px] h-[250px]" />
      </Link>
      <p className="pb-[6px] pt-[12px] pl-[10px] text-[16px]">{info}</p>
      <p className="text-[#46a358] pl-[10px] pb-[10px] text-[18px]">{price}</p>
    </div>
  );
};

export default ProductCart;
