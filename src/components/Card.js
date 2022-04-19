import React from "react";
import katie from "../images/katie.png";
import star from "../images/star.png";

export default function Card() {
    return (
        <div className="card">
            <img src={katie} alt="Katy Zaferes" className="card--image" />
            <div className="card--stats">
                <img src={star} alt="Star" className="card--star" />
                <span>5.0</span>
                <span className="grey">(6) ·</span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}
