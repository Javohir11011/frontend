import React from "react";
import { Header } from "../components/header/header.jsx";
import { Footer } from "../components/footer/footer.jsx";
import { About } from "../components/about/about.jsx";


export const MainLayout = () =>{
    return (
        <>
         <header>
            <Header/>
         </header>
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
            <footer>
                <Footer />
            </footer>
        </>

       
    )
}