import React from "react";
import { GetCategoriesQuery } from "../service/getAllCategories";

const Filter = ({ fn }: { fn: (obj: object) => void }) => {
  const { data, isLoading } = GetCategoriesQuery();

  return (
    <div className="w-full pt-[20px]">
      {isLoading
        ? "Loading"
        : data?.map((item: any) => (
            <li key={item.id} className="flex justify-between items-center">
              <button onClick={() => fn({ categories: item.id })}>
                {item.name}
              </button>
              <p className="pt-[10px] pb-[10px]">{item.name}</p>
              <span>{item.products.length}</span>
            </li>
          ))}
    </div>
  );
};

export default Filter;
