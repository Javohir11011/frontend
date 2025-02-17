import React from "react";
import img1 from "../../assets/runklar/img1.svg"
import img2 from "../../assets/runklar/img2.svg"
import img3 from "../../assets/runklar/img3.svg"
import img4 from "../../assets/runklar/img4.svg"
import img5 from "../../assets/runklar/img5.svg"
import img6 from "../../assets/runklar/img6.svg"


export const Runklar = () =>{
    return (
        <div className="container">
            <h2 className="pt-[40px] pb-[32px] text-[32px]">Рукнлар</h2>
            <div className="flex items-center justify-between ">
                <img src={img1} alt="img" />
                <img src={img2} alt="img" />
                <img src={img3} alt="img" />
                <img src={img4} alt="img" />
                <img src={img5} alt="img" />
                <img src={img6} alt="img" />
            </div>
        </div>
    )
}