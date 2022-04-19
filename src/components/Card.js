import React from "react";
import star from "../images/star.png";

export default function Card(props) {
    let photo = require("../images/"+props.img)
    return (
        <div className="card">
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={photo} alt="" className="card--image" />
            <div className="card--stats">
                <img src={star} alt="Star" className="card--star" />
                <span>{props.rating}</span>
                <span className="grey"> ({props.reviewCount}) ·</span>
                <span className="grey">{props.country}</span>
            </div>
            <p className="card--title">{props.title} </p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
