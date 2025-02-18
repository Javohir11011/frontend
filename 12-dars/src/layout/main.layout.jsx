import React from "react";
import { Header } from "./header/header.layout";
import { Footer } from "./footer/footer.layout";
import { About } from "./about/about";
import { Product } from "./customer/customer";
import img from "./img/main.svg"
import img2 from "../assets/about/img1.svg"
import img3 from "../assets/about/img2.svg"
import img4 from "../assets/about/img3.svg"
import product from "../assets/product/product1.svg"
import product2 from "../assets/product/product2.svg"
import product3 from "../assets/product/product3.svg"
import product4 from "../assets/product/product4.svg"
import product5 from "../assets/product/product5.svg"
import product6 from "../assets/product/product6.svg"
import product7 from "../assets/product/product7.svg"
import product8 from "../assets/product/product8.svg"
import statistika from "../assets/product/statistika1.svg"
import statistika2 from "../assets/product/statistika2.svg"
import logo from "../assets/product/logocha.svg"

export const MainLayout = () =>{
    return (
        <>
            <Header/>
            <section>
                <div className="container pb-[56px]">
                    <img src={img} alt="img" />
                </div>
            </section>
            <section>
                <div className=" pl-[35%] pb-[45px]">
                    <h2 className="text-[32px] pl-[90px]">Browse The Range</h2>
                    <p className="text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex justify-self-center gap-[20px] pb-[56px]">
                    <About img={img2}
                        text={"Dining"}/>
                    <About img={img3}
                        text={"Living"}/>
                    <About img={img4}
                        text={"Bedroom"}/>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="flex justify-self-center items-center gap-[32px] pb-[32px]">
                        <Product img={product}
                            title={"Syltherine"}
                            text={"Stylish cafe chair"}
                            price={"Rp 2.500.000"}/>
                        <Product img={product2}
                            title={"Lolito"}
                            text={"Stylish cafe chair"}
                            price={"Rp 7.000.000"}/>
                        <Product img={product3}
                            title={"Respira"}
                            text={"Stylish cafe chair"}
                            price={"Rp 500.000"}/>
                        <Product img={product4}
                            title={"Grifo"}
                            text={"Night lamp"}
                            price={"Rp 1.500.000"}/>
    
                    </div>
                    <div className="flex justify-self-center items-center gap-[32px]">
                        <Product img={product5}
                            title={"Syltherine"}
                            text={"Stylish cafe chair"}
                            price={"Rp 2.500.000"}/>
                        <Product img={product6}
                            title={"Muggo"}
                            text={"Small mug"}
                            price={"Rp 150.000"}/>
                        <Product img={product7}
                            title={"Pingky"}
                            text={"Cute bed set"}
                            price={"Rp 7.000.000"}/>
                        <Product img={product8}
                            title={"Potty"}
                            text={"Minimalist flower pot"}
                            price={"Rp 500.000"}/>
    
                    </div>
                    <button className="text-[30px] text-amber-500 pl-[45%] pt-[50px] pb-[70px]">show mores</button>
                </div>

            </section> 
            <section>
                <div className="container">
                    <div className="flex items-center justify-self-auto gap-[32px] pt-[44px] bg-amber-100">
                        <div className="">
                            <h2 className="w-[422px] text-[40px] pb-[20px]">
                            50+ Beautiful rooms 
                            inspiration
                            </h2>
                            <p className="w-[368px] text-[16px] pb-[20px]">
                            Our designer already made a lot of beautiful prototipe of rooms that inspire you
                            </p>
                            <button className="w-[176px] text-white bg-amber-600 text-[16px]">Explore More</button>
                        </div>
                        <img src={statistika} alt="img"/>
                        <div className="">
                            <img src={statistika2} alt="img"/>
                            <img src={logo} alt="img" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>   
        </>
    )
}