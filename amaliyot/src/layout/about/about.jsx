import React from "react";
import logo from "../../assets/about.img1.svg"

export const About = ({title, text})=>{
    return (
        <div className="flex gap-[10px] ">
            <img src={logo} alt="img" />
            <div className="">
                <h2 className="text-[20px] pb-[7px]">
                     {title}
                 </h2>
                 <p className=" w-[211px] text-[11px]">
                    {text}
                </p>
                </div>
           </div>
    )
}