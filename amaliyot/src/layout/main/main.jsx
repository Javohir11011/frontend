import React from "react";  
import img1 from "../../assets/about.opa.svg"
import img2 from "../../assets/about.book.svg"
import img3 from "../../assets/about.city.svg"
import img4 from "../../assets/about.oka.svg"

export const Main = () =>{
    return (
        <div className="container">
            <div className="flex gap-[24px]  items-center justify-between ">
                <div className=" flex justify-between items-center">
                    <img src={img1} alt="img" />
                    <img src={img2} alt="img" />
                    <img src={img3} alt="img" />
                    <img src={img4} alt="img" />
                </div>
                <div className="bg-blue-900  rounded-[15px] text-[center]">
                    <h2 className=" w-[199px] text-[24px] pb-[20px] text-[white]">
                        Китоб ўқишни ёқтирасизми?
                    </h2>
                    <p className="w-[215px] text-[18px] pb-[77px] text-[white]">
                        Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
                    </p>
                    <button className="w-[210px] text-[white]">
                        Обуна бўлиш
                    </button>
                </div>
            </div>
        </div>
    )
}