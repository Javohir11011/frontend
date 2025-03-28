"use client";
import getProducts from "@/app/service/getProducts";
import React, { useEffect, useState } from "react";
import ProductCart from "../product-cart";
import logo2 from "../../assets/home/logo2.svg";
import Category from "./filter/category";

const Products = () => {
  const [filter, setFilter] = useState({});
  const { data, refetch } = getProducts(filter);
  useEffect(() => {
    refetch();
  }, [filter]);
  const fn = (obj: object) => {
    setFilter({ ...filter, ...obj });
  };

  return (
    <div>
      <div className="pt-[50px] flex gap-[50px]">
        <div className="bg-[#fbfbfb] pl-[24px] pr-[18px]">
          <h3 className="text-[18px] text-[#3d3d3d] pt-[10px]">Categories</h3>
          <div className="flex justify-between">
            <Category fn={(obj: object) => fn(obj)} />
          </div>
          <h3 className="pb-[16px] pt-[15px] text-[18px]">Price Range</h3>
          <div>
            <p className="text-[15px] pb-[16px]">
              Price: <span className="text-[#46a358] ">$39 - $1230</span>
            </p>
            <button className="pt-[9px] pb-[9px] pr-[25px] pl-[25px] text-white bg-[#46a358] rounded-[6px]">
              Filter
            </button>
          </div>
          <h3 className="pb-[16px] pt-[46px] text-[18px]">Size</h3>
          <div className="flex justify-between">
            <ul>
              <li className="text-[15px] pb-[12px]">Succulents</li>
              <li className="text-[15px] pb-[12px]">Gardening</li>
              <li className="text-[15px] pb-[12px]">Accessories</li>
            </ul>
            <ul>
              <li className="text-[15px] pb-[12px]">12</li>
              <li className="text-[15px] pb-[12px]">65</li>
              <li className="text-[15px] pb-[12px]">39</li>
            </ul>
          </div>
          <img src={logo2.src} alt="img" className="pt-[20px]" />
        </div>
        <div>
          <div className="flex justify-between items-center pb-[20px]">
            <div className="flex gap-[40px] text-[15px]">
              <p>All Plants</p>
              <p>New Arrivals</p>
              <p>Sale</p>
            </div>
            <p>Short by: Default sorting</p>
          </div>
          <div className="grid grid-cols-3 gap-[25px] ">
            {data?.map((e) => (
              <ProductCart
                id={e.id}
                img={e.picture}
                price={e.price}
                info={e.title}
                key={e.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
