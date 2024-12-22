import React from "react";
import "./Navbar.module.css";

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/support">Support</a></li>
                <li><a href="/community">Community</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
