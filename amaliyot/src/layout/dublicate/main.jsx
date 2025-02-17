import React from "react";
import img1 from "../../assets/books/book6.svg"
import img2 from "../../assets/books/book7.svg"
import img3 from "../../assets/books/book8.svg"
import img4 from "../../assets/books/book9.svg"
import img5 from "../../assets/books/book10.svg"
import logo1 from "../../assets/logos/logo1.svg"
import logo2 from "../../assets/logos/logo2.svg"


export const Dublicate = () =>{
    return (
        <div className="container">
            <h2 className="pt-[40px] pb-[32px] text-[32px]">Янги қўшилганлар</h2>
            <div className="flex items-center justify-between gap-[15px]">
                <div >
                    <img src={img1} alt="img" />
                    <h3 className="">1984</h3>
                    <p>SIYOSAT, FANTASTIKA</p>
                    <div className="flex justify-between">
                        <img src={logo2} alt="img" />
                        <img src={logo1} alt="img" />
                    </div>
                </div>
                <div >
                    <img src={img2} alt="img" />
                    <h3 className="">1984</h3>
                    <p>SIYOSAT, FANTASTIKA</p>
                    <div className="flex justify-between">
                        <img src={logo2} alt="img" />
                        <img src={logo1} alt="img" />
                    </div>
                </div>
                <div >
                    <img src={img3} alt="img" />
                    <h3 className="">1984</h3>
                    <p>SIYOSAT, FANTASTIKA</p>
                    <div className="flex justify-between">
                        <img src={logo2} alt="img" />
                        <img src={logo1} alt="img" />
                    </div>
                </div>
                <div >
                    <img src={img4} alt="img" />
                    <h3 className="">1984</h3>
                    <p>SIYOSAT, FANTASTIKA</p>
                    <div className="flex justify-between">
                        <img src={logo2} alt="img" />
                        <img src={logo1} alt="img" />
                    </div>
                </div>
                <div >
                    <img src={img5} alt="img" />
                    <h3 className="">1984</h3>
                    <p>SIYOSAT, FANTASTIKA</p>
                    <div className="flex justify-between">
                        <img src={logo2} alt="img" />
                        <img src={logo1} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}