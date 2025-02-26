import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Home } from "./home";
import logo1 from "../assets/home/logo1.svg";
import logo2 from "../assets/home/logo2.svg";
import logo3 from "../assets/home/logo3.svg";
import logo4 from "../assets/home/logo4.svg";
import logo5 from "../assets/home/logo5.svg";

export const MainLayout = ({ childern }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Home />
        <ul className="flex justify-between items-center h-[122px] pr-[100px] pl-[100px] bg-black  text-white">
          <img src={logo1} alt="img" />
          <img src={logo2} alt="img" />
          <img src={logo3} alt="img" />
          <img src={logo4} alt="img" />
          <img src={logo5} alt="img" />
        </ul>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
