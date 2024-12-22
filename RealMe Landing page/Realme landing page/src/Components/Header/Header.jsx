import React from "react";
import Navbar from "../Navbar/Navbar"; 
import Banner from "./Banner/Banner";
import "./Header.module.css";

function Header() {
    return (
        <header className="header">
            <Navbar />
            <Banner />
        </header>
    );
}

export default Header;
