import { useState, useEffect } from "react"
import { Header } from "../../components/Header"
import { DottedLine } from "../../components/DottedLine"
import { Footer } from "../../components/Footer"

import styles from "./CategoryRankings.module.css"

export function CategoryRankings() {

    const buttonData = [
        { symbol: "Esc", text: "Back" }
    ]
    const rankingsData = [
        { rank: 2, name: 'Bull', car: 'Mercedes-Benz SLR McLaren', time: '28:00' },
        { rank: 3, name: 'Ronnie', car: 'Aston Martin DB9', time: '26:00' },
        { rank: 4, name: 'JV', car: 'Dodge Viper SRT10', time: '20:00' },
        { rank: 5, name: 'Webster', car: 'Corvette C6', time: '15:00' },
        { rank: 6, name: 'Ming', car: 'Lamborghini Gallardo', time: '10:00' },
        { rank: 7, name: 'gabbu', car: 'Toyota Corolla GT-S', time: '9:53' },
        { rank: 8, name: 'Kaze', car: 'Mercedes-Benz CLK 500', time: '9:00' },
        { rank: 9, name: 'Jewels', car: 'Ford Mustang GT', time: '8:00' },
        { rank: 10, name: 'Earl', car: 'Mitsubishi Lancer EVOLUTION VIII', time: '7:00' },
        { rank: 11, name: 'Baron', car: 'Porsche Cayman S', time: '6:00' },
    ];
    return (
        <div className={styles.rankings}>
            <Header title={"Rankings"} />

            <DottedLine />

            <table className={styles.rankings_table}>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Car</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {rankingsData.map((item) => (
                        <tr key={item.rank} className={item.name === 'gabbu' ? styles.gabbu_row : ''}>
                            <td>{item.rank}</td>
                            <td>{item.name}</td>
                            <td>{item.car}</td>
                            <td>{item.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {window.innerWidth > 1000 && <><DottedLine /> <Footer buttons={buttonData} /></>}
        </div>

    )
}