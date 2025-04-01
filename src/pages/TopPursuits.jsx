import { useState, useEffect } from "react"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Footer } from "../components/Footer"
import "../css/TopPursuits.css"

export function TopPursuits() {
    const buttonData = [
        { symbol: "Esc", text: "Back" },
        { symbol: "Esc", text: "Back" }
    ]

    const topPursuitsData = [
        {
            rank: 1,
            carUsed: "Toyota Corolla GT-S",
            id: "MW-0X7I6R3Z",
            bounty: 715000,
            length: "1:45.02",
        },
        {
            rank: 2,
            carUsed: "Toyota Corolla GT-S",
            id: "MW-1Q3C3V5T",
            bounty: 650000,
            length: "2:35.69",
        },
        {
            rank: 3,
            carUsed: "Toyota Corolla GT-S",
            id: "MW-4D207U7S",
            bounty: 352500,
            length: "9:53.36",
        },
        {
            rank: 4,
            carUsed: "Toyota Corolla GT-S",
            id: "MW-1COR6B9J",
            bounty: 350000,
            length: "27.10",
        },
        {
            rank: 5,
            carUsed: "Toyota Corolla GT-S",
            id: "MW-9W1C2N9U",
            bounty: 185000,
            length: "3:42.63",
        },
    ];

    return (
        <div className="top-pursuits">
            <Header title={"Cost To State"} />

            <div className="top">
                <h2>Name: gabbu</h2>
                <h2 className="bounty">Bounty: 6,580,800</h2>
            </div>

            <DottedLine />

            <ol className="pursuit-data">
                {topPursuitsData.map((data, index) => (
                    <li key={index} className="data">
                        <h2 className="rank">{data.rank}</h2>
                        <div className="stat">
                            <h2 style={{ color: "white" }}>Car Used: {data.carUsed}</h2>
                            <h2>ID: {data.id}</h2>
                            <h2>Bounty: {data.bounty}</h2>
                            <h2>Length{data.length}</h2>
                        </div>
                    </li>

                ))}

            </ol>
            {window.innerWidth > 1000 && <><DottedLine /> <Footer buttons={buttonData} /></>}
        </div>
    )
}