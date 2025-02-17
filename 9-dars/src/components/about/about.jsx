import React from "react";
import logo from "../../assets/about.img1.svg"
import "./about.css"

export const About = ({title, text})=>{
    return (
        <div className="container">
            <div className="about__block">
                <div className="about__box1">
                    <img src={logo} alt="img"/>
                        <div className="about__box2">
                            <h2 className="about__title">
                                {title}
                            </h2>
                            <p className="about__text">
                                {text}
                            </p> 
                        </div>
                 </div>
            </div>
        </div>
    )
}