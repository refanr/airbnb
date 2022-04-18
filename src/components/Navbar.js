import React from "react";
import alogo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={alogo} alt="Airbnb logo" className="nav--logo" />
        </nav>
    )
}