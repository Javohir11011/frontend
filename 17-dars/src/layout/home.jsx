import React from "react";

export const Home = () => {
  return (
    <div className="container pt-[103px]">
      <div className="text-[16px]">
        <h2 className=" text-[64px] text-black w-[577px] pb-[32px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h2>
        <p className="w-[545px] pb-[32px]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className=" bg-black text-white w-[210px] rounded-xl h-[52px]">
          Shop
        </button>
        <div className="flex pb-[116px]">
          <div className="pr-[32px]">
            <h3 className="text-[40px] ">200+</h3>
            <p>International Brands</p>
          </div>
          <div className="pr-[32px] pl-[32px]">
            <h3 className="text-[40px] ">2,000+</h3>
            <p>High-Quality Products</p>
          </div>
          <div className="pl-[32px]">
            <h3 className="text-[40px] ">30,000+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};
