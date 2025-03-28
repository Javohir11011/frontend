// "use client";

import { ProductData } from "@/data/product-data";
import logo from "../app/assets/home/logo.svg";
import ProductCart from "./_components/product-cart";
import logo3 from "../app/assets/home/logo3.svg";
import logo4 from "../app/assets/home/logo4.svg";
import ProductWrapper from "./_components/products";
// import { GetCategoriesQuery } from "./service/getAllCategories";
// import Filter from "./_components/filter";

export default function Home() {
  // const { data, isLoading } = GetCategoriesQuery();
  // console.log(data);

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

      <ProductWrapper />
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
