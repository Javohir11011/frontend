import React from "react";
import logo from "../../assets/header/logo.svg"
import logo2 from "../../assets/header/logo2.svg"
import logo3 from "../../assets/header/logo3.svg"
import logo4 from "../../assets/header/logo4.svg"
import logo5 from "../../assets/header/logo5.svg"

export const Header = () =>{
    return (
        <div className="container">
            <div className="flex justify-between items-center pt-[30px] pb-[30px]">
                <div className="">
                    <img src={logo} alt="img" />
                </div>
                <ul className="flex gap-[75px] text-[16px]">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <ul className="flex gap-[45px]">
                    <li><img src={logo2} alt="img" /></li>
                    <li><img src={logo3} alt="img" /></li>
                    <li><img src={logo4} alt="img" /></li>
                    <li><img src={logo5} alt="img" /></li>
                </ul>
            </div>
        </div>
    )
} 