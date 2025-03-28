"use client";
import getCategories from "@/app/service/getAllCategories";
import React from "react";

const Category = ({ fn }: { fn: (obj: object) => void }) => {
  const { data, isLoading } = getCategories();
  return (
    <div className="w-full">
      {isLoading
        ? "Loading"
        : data?.map((item: any) => (
            <li key={item.id} className="flex justify-between items-center">
              <button
                onClick={() => fn({ category_id: item.id })}
                className="pt-[10px] pb-[10px]"
              >
                {item.name}
              </button>
              {/* <p >{item.name}</p> */}
              <span>{item.products.length}</span>
            </li>
          ))}
    </div>
  );
};

export default Category;
