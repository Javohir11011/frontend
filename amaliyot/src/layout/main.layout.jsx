import React from "react";  
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Main } from "./main/main";
import { About } from "./about/about";
import { Runklar } from "./tanlash/tanlash";
import { Dublicate } from "./dublicate/main";
import { Dublicate2 } from "./dublicate/main2";


export const MainLayout = () =>{
    return (
        <div>
            <header className="pt-[20px]">
                <Header />
            </header>
            <main>
                <Main />
                <div className="container">
                    <div className="flex justify-between items-center pt-[56px]">
                        <About 
                            title={"Тезкор етказиш"}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
                        />
                        <About 
                            title={"Тўлов химояси"}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
                        />
                        <About 
                            title={"Юқори сифат"}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
                        />
                        <About 
                            title={"Энг сара китоблар"}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
                        />
                    </div>
                </div>
                <Runklar />
                <Dublicate />
                <Dublicate2 />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}