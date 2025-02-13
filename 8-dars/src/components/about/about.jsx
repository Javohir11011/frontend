import React from "react"

export const About = ({number, title, text}) =>{
    return (
        <div className="container">
            <div className="about__block">
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
        </div>
    )
}