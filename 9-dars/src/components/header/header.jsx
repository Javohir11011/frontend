import React from "react";
import headerLogo from "../../assets/header.log.svg"
import headerLogo3 from "../../assets/header.logo3.svg"
import headerLogo4 from "../../assets/header.logo4.svg"
import "./header.css"

export const Header = () => {
    return (
        <div className="container">
                <div className="header__block">
                    <img src={headerLogo} alt="img" />
                    <form className="header__form">
                        <button className="header__btn">
                            Рукнлар
                        </button>
                        <input type="text" className="header__input"/>
                    </form>
                    <div className="header__box2">
                        <img src= {headerLogo3} alt="img" />
                        <img src={headerLogo4} alt="img" />
                    </div>
                </div>
        </div>
    )
}