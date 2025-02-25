import React from "react";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

export const MainLayout = ({childern}) =>{
    return (
        <>
            <header>
                <Header />
            </header>
            <main>{childern}</main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}