import React from "react"
import "./about.css"
export const About = ({number, title, text}) =>{
    return (
    <div className="about__blockk">
        <button className="about__btn">
            {number}
        </button>
        <div className="about__box1">
            <h3 className="about__title">
                {title}
            </h3>
            <p className="about__text">{text}</p>
        </div>
    </div>
    )
}