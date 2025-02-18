import React from "react";

export const Product = ({img, title, text, price}) =>{
    return (
        <div>
                <img src={img} alt="img" className="border-2" />
                <h3 className="text-[24px]">{title}</h3>
                <p className="text-[16px]">{text}</p>
                <h4 className="text-[24px]">{price}</h4>
        </div>
    )
}