import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
console.log(data)

export default function App() {
    const cardData = data.map(item => {
        return (
        <Card 
            img={item.img} 
            rating={item.rating} 
            reviewCount={item.reviewCount} 
            country={item.country} 
            title={item.title} 
            price={item.price} 
            openSpots={item.openSpots}
            />
            )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardData}
            </section>
        </div>
    )
}