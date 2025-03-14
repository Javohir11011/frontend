"use client";
import { userT } from "@/service/mutation/createUser";
import React from "react";

export const UserCard = ({ id, title, description }: userT) => {
  // const {} =
  return (
    <div className="rounded-[7px] bg-blue-600 pl-[20px] pr-[20px] pt-[10px] pb-[10px]">
      <h1 className="text-[19px]">{title}</h1>
      <h1 className="text-[15px] pb-[10px]">{description}</h1>
      <div className="flex gap-[20px]">
        <button className=" bg-red-500 rounded-[5px] p-[5px]" type="submit">
          update
        </button>
        <button className="rounded-[5px] bg-green-500 p-[5px]" type="submit">
          delete
        </button>
      </div>
    </div>
  );
};
