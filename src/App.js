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
            {...item}
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