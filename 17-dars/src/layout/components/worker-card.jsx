import React from "react";

export const WorkerCard = ({ id, img, name, info, date }) => {
  return (
    <div>
      <div className="px-[32px] py-[28px] rounded-[12px]">
        <img src={img} alt="img" className="pb-[12px]" />
        <div className="">
          <h3 className="text-[20px] pb-[12px]">{name}</h3>
          <p className="text-[16px] pb-[24px]">{info}</p>
        </div>
        <p className="text-[16px]">{date}</p>
      </div>
    </div>
  );
};
