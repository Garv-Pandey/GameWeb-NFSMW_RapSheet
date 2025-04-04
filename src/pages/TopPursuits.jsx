import { useState, useEffect } from "react"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Footer } from "../components/Footer"
import styles from "./TopPursuits.module.css"
import { Link } from "react-router-dom"

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
        <div className={styles.top_pursuits}>
            <Header title={"Top 5 Pursuits"} />

            <div className={styles.top}>
                <h2>Name: gabbu</h2>
                <h2 className={styles.bounty}>Bounty: 6,580,800</h2>
            </div>

            <DottedLine />

            <ol className={styles.pursuit_data}>
                {topPursuitsData.map((data, index) => (
                    <Link key={index} to={`/top-pursuits/${data.id}`} style={{textDecoration: 'none', color: 'inherit'}}>

                    <li key={index} className={styles.data}>
                        <h2 className={styles.rank}>{data.rank}</h2>
                        <div className={styles.stat}>
                            <h2 style={{ color: "white" }}>Car Used: {data.carUsed}</h2>
                            <h2>ID: {data.id}</h2>
                            <h2>Bounty: {data.bounty}</h2>
                            <h2>Length{data.length}</h2>
                        </div>
                    </li>

                    </ Link>

                ))}

            </ol>
            {window.innerWidth > 1000 && <><DottedLine /> <Footer buttons={buttonData} /></>}
        </div>
    )
}