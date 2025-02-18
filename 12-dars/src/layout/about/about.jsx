import React from "react";


export const About = ({img, text}) =>{
    return (
        <div>
            <img src={img} alt="img" className="pb-[30px]"/>
            <h2 className="text-[24px] pl-[40%] text-black">{text}</h2>
        </div>
    )
} 