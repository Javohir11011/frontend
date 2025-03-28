"use client";
import React from "react";
import getByIdProduct from "../service/getByIdProduct";

export interface ProductInner {
  description: string;
  id: string;
  picture: string;
  price: string;
  size: string;
  summary: string;
  tags: string;
  title: string;
  type: string;
}
const ProductInner = ({ id }: { id: string }) => {
  const { data, isLoading } = getByIdProduct(id);

  return (
    <div className="container">
      <div className="flex pt-[100px] pb-[100px]">
        <div className="flex gap-[39px]">
          <div className="">
            <img
              src={data.src}
              alt="product1"
              className="p-[15px] bg-[#fbfbfb]"
            />
            <img
              src={picture.src}
              alt="product2"
              className="p-[15px] bg-[#fbfbfb]"
            />
            <img
              src={picture.src}
              alt="product3"
              className="p-[15px] bg-[#fbfbfb]"
            />
            <img
              src={picture.src}
              alt="product4"
              className="p-[15px] bg-[#fbfbfb]"
            />
          </div>
          <img
            src={picture.src}
            alt="product5"
            className="p-[20px] bg-[#fbfbfb] rounded-[2px]"
          />
        </div>
        <div className="p-[20px]">
          <div>
            <h2 className="text-[28px] pb-[28px]">Barberton Daisy</h2>
            <div className="flex gap-[265px]">
              <p className="text-[#46a358] text-[22px]">$119.00</p>
              <img src={logo.src} alt="img" className="pb-[28px]" />
            </div>
          </div>
          <div>
            <h3 className="pb-[10px] text-[15px]">Short Description:</h3>
            <p className="w-[573px] text-[14px] pb-[24px]">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground.
            </p>

            <h3 className="text-[15px] pb-[15px]">Size:</h3>
            <div className="flex gap-4 pb-[20px]">
              <button className="rounded-3xl text-[#727272] p-[10px] border border-green-500">
                S
              </button>
              <button className="rounded-3xl text-[#727272] p-[10px] border border-[#eaeaea]">
                M
              </button>
              <button className="rounded-3xl text-[#727272] p-[10px] border border-[#eaeaea]">
                L
              </button>
              <button className="rounded-3xl text-[#727272] p-[10px] border border-[#eaeaea]">
                XL
              </button>
            </div>
            <div className="flex gap-[26px]">
              <div className="flex gap-4 items-center">
                <button className="rounded-3xl text-[#fff] p-[10px]  bg-green-500">
                  -
                </button>
                1
                <button className="rounded-3xl text-[#fff] p-[10px] bg-green-500">
                  +
                </button>
              </div>
              <div className=" flex gap-[10px]">
                <button className="pt-[11px] pb-[11px] pr-[32px] pl-[32px] bg-green-500 text-white rounded-[10px]">
                  BUY NOW
                </button>
                <button className="pt-[11px] pb-[11px] pr-[32px] pl-[32px] bg-white text-green-500 rounded-[10px] border border-green-500">
                  ADD TO CART
                </button>
                <button className="p-[5px] border border-green-500 rounded-[10px]">
                  <img src={logo2.src} alt="img" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInner;
