import React from "react";


export const Footer = () =>{
    return (
        <div className="container">
            <div className="">
                <div className="flex  justify-around pt-[70px] pb-[30px]">
                    <ul>
                        <li className="text-[30px]">Funiro</li>
                        <li className="w-[285px]">400 University Drive Suite 200 Coral Gables,
                        FL 33134 USA</li>
                    </ul>
                    <ul className="">
                        <li className="pb-[20px]">Links</li>
                        <li className="pb-[20px]">Home</li>
                        <li className="pb-[20px]">Shop</li>
                        <li className="pb-[20px]">About</li>
                        <li className="pb-[20px]">Contact</li>
                    </ul>
                    <ul>
                        <li className="pb-[20px]">Payment Options</li>
                        <li className="pb-[20px]">Returns</li>
                        <li className="pb-[20px]">About</li>
                        <li className="pb-[20px]">Privacy Policies</li>
                    </ul>
                    <ul>
                        <li className="pb-[20px]">Newsletter</li>
                        <li className="pb-[20px]"><input type="text" placeholder="Enter Your Email Address" className="pr-[20px]"/>
                        <button>sumbit</button></li>
                        <li className="pb-[20px]">About</li>
                        <li className="pb-[20px]">Privacy Policies</li>
                    </ul>
                </div>
                <div className="pl-[6%] pb-[30px] text-[16px]">
                    <p>2023 furino. All rights reverved</p>
                </div>

            </div>
        </div>
    )
}