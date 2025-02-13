import "./header.css";
import headerImg from "../../assets/header1.svg";

export const Header = ()=>{
    return (
        <div className="container">
            <div className="header__block">
                <img src={headerImg} alt="" />
                <ul className="header__list">
                    <li className="header__item">Pricing</li>
                    <li className="header__item">Product</li>
                    <li className="header__item">About Us</li>
                    <li className="header__item">Careers</li>
                    <li className="header__item">Community</li>
                </ul>
                <button className="header__btn">Get Started</button>
            </div>
        </div>
    )
}