import React from "react";
import short1 from "../assets/details/short.svg";
import short2 from "../assets/details/short2.svg";
import short3 from "../assets/details/short3.svg";
import short4 from "../assets/details/short4.svg";
import rating from "../assets/details/rating/rating.svg";
import discount from "../assets/details/discount.svg";
import colors from "../assets/details/colors.svg";
import { Workers } from "../data/workers";
import line from "../assets/details/line.svg";
import img1 from "../assets/details/setting.svg";
import { WorkerCard } from "../layout/components/worker-card";
import { Button } from "../components/button";
import { topProducts } from "../data/top-pro";
import { ProductCard } from "../layout/components/product-card";
export const Detail = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex justify-between pt-[82px]">
            <div className="flex gap-[14px] pb-[100px]">
              <div className="">
                <img src={short1} alt="img" className="pb-[14px]" />
                <img src={short2} alt="img" className="pb-[14px]" />
                <img src={short3} alt="img" />
              </div>
              <img src={short4} alt="img" />
            </div>
            <div className="">
              <h2 className="text-[48px] font-bold secondFont text-black">
                One Life Graphic T-shirt
              </h2>
              <img src={rating} alt="img" className="pb-[14px]" />
              <div className="flex gap-[12px] pb-[30px]">
                <img src={discount} alt="img" />
                <button className="py-[6px] px-[13.5px] text-[12px] font-medium bg-pink rounded-[62px] text-danger">
                  -40%
                </button>
              </div>
              <div>
                <p className="w-[590px]">
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric, it offers superior
                  comfort and style.
                </p>
              </div>
              <div className="pt-[48px]">
                <p className="text-[16px] pb-[16px] ">Select Colors</p>
                <img src={colors} alt="img" className="pb-[15px]" />
              </div>
              <div className="">
                <p className="text-[16px] pb-[16px]">Choose Size</p>
                <div className="w-[420px">
                  <button className="py-[6px] px-[13.5px] text-[12px] font-medium bg-amber-50 rounded-[62px] text-black">
                    Small
                  </button>
                  <button className="py-[6px] px-[13.5px] text-[12px] font-medium bg-amber-50 rounded-[62px] text-black">
                    Medium
                  </button>
                  <button className="py-[6px] px-[13.5px] text-[12px] font-medium bg-black rounded-[62px] text-white">
                    Large
                  </button>
                  <button className="py-[6px] px-[13.5px] text-[12px] font-medium bg-amber-50 rounded-[62px] text-black">
                    Small
                  </button>
                </div>
                <div className="pt-[48px]">
                  <button className="w-[170px] bg-amber-50 h-[40px]  rounded-[62px]">
                    - 1 +
                  </button>
                  <button className="w-[400px] bg-black rounded-[62px] text-[12px] text-white h-[40px]">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <ul className="flex justify-evenly gap-[269px] text-[20px] pb-[24px] rounded-gray">
            <li>Product Details</li>
            <li>Rating & Reviews</li>
            <li>FAQs</li>
          </ul>
          <img src={line} alt="img" />
          <div className="flex justify-between items-center pt-[24px] pb-[24px]">
            <p className="text-[24px]">All Reviews(451)</p>
            <div className="flex gap-[10px] pb-[64px]">
              <img src={img1} alt="img" />
              <Button variant={"six"}>Latest</Button>
              <Button variant={"five"} className={"text-white"}>
                Write a Review
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[20px] pb-[36px]">
            {Workers.map((item) => {
              return (
                <WorkerCard
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  info={item.info}
                  date={item.date}
                />
              );
            })}
          </div>
          <Button variant={"four"} className={""}>
            Load More Reviews
          </Button>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex flex-col items-center">
            <h2 className="text-[48px] font-bold secondFont pb-[55px]">
              You might also like
            </h2>
            <div className="grid grid-cols-4 gap-[20px] pb-[170px]">
              {topProducts.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    rate={item.rating}
                    price={item.price}
                    old_price={item.old_price}
                    discount={item.discount}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
