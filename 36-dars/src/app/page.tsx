"use client";

import { ProductData } from "@/data/product-data";
import logo from "../app/assets/home/logo.svg";
import ProductCart from "./_components/product-cart";
import logo2 from "../app/assets/home/logo2.svg";
import logo3 from "../app/assets/home/logo3.svg";
import logo4 from "../app/assets/home/logo4.svg";
import { GetCategoriesQuery } from "./service/getAllCategories";

export default function Home() {
  const { data, isLoading } = GetCategoriesQuery();
  console.log(data);

  return (
    <div className="container">
      <div className="flex pt-[62px] pl-[25px] pr-[25px] gap-[123px] bg-[#fbfbfb] pb-[40px]">
        <div>
          <p className="text-[14px]">Welcome to GreenShop</p>
          <h2 className="text-[70px] text-[#3d3d3d] pb-[8px] w-[530px]">
            Let’s Make a Better <span className="text-[#46a358]">Planet</span>
          </h2>
          <p className="text-[14px] pb-[44px] w-[557px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <button className="text-[18px] text-[#fff] pt-[10px] pb-[10px] pr-[27px] pl-[27px] bg-[#46a358] rounded-[6px]">
            Shop now
          </button>
        </div>
        <img src={logo.src} alt="img" />
      </div>

      <div className="pt-[50px] flex gap-[50px]">
        <div className="bg-[#fbfbfb] pl-[24px] pr-[18px]">
          <h3 className="text-[18px] text-[#3d3d3d] pt-[10px]">Categories</h3>
          <div className="flex justify-between">
            <div className="w-full pt-[20px]">
              {isLoading
                ? "Loading"
                : data?.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <p className="pt-[10px] pb-[10px]">{item.name}</p>
                      <span>{item.products.length}</span>
                    </li>
                  ))}
            </div>
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
            {ProductData.map((item) => (
              <ProductCart
                key={item.id}
                img={item.img}
                info={item.info}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex pt-[100px] pl-[25px] pr-[25px] pb-[100px]">
          <div className="flex">
            <div>
              <img src={logo3.src} alt="img" />
            </div>
            <div>
              <p className="text-[14px]">Welcome to GreenShop</p>
              <h2 className="text-[25px] text-[#3d3d3d] pb-[8px]">
                Let’s Make a Better{" "}
                <span className="text-[#46a358]">Planet</span>
              </h2>
              <p className="text-[14px] pb-[44px] w-[300px]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="text-[18px] text-[#fff] pt-[10px] pb-[10px] pr-[27px] pl-[27px] bg-[#46a358] rounded-[6px]">
                Shop now
              </button>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src={logo4.src} alt="img" />
            </div>
            <div>
              <p className="text-[14px]">Welcome to GreenShop</p>
              <h2 className="text-[25px] text-[#3d3d3d] pb-[8px]">
                Let’s Make a Better{" "}
                <span className="text-[#46a358]">Planet</span>
              </h2>
              <p className="text-[14px] pb-[44px] w-[300px]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="text-[18px] text-[#fff] pt-[10px] pb-[10px] pr-[27px] pl-[27px] bg-[#46a358] rounded-[6px]">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
