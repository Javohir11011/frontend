import React from "react";  
import logo1 from "../../assets/logo1.svg"
import logo2 from "../../assets/logo2.svg"

export const Header = () =>{
    return (
        <div className="container ">
           <div className="flex   justify-between items-center gap-[40px] pb-[64px]">
                 <a >
                    <img src={logo1} alt="img" />
                </a>
                <div className=" w-[739px] border-1px solid #fff">
                    <button className=" w-[70px] h-[30px]  bg-yellow text-[15px] ">Рукнлар</button>
                    <input type="text" className=" w-[555px] border-2"/>
                </div>
                <div className="flex">
                    <a >
                        <img src={logo2} alt="img" />
                    </a>
                    <button className="w-[70px]  bg-yellow text-[20px]">Кириш</button>
                </div>
           </div>
        </div>
    )
}