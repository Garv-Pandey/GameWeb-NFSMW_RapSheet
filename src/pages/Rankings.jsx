import { useState, useEffect, useRef } from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Link } from "react-router-dom"
import styles from './Rankings.module.css'

export function Rankings() {
    const buttonData = [
        { symbol: "Esc", text: "Back" },
        { symbol: "Esc", text: "Back" }
    ]

    const rankingCategories = [
        { label: "PURSUIT LENGTH", value: 7 },
        { label: "TOTAL POLICE VEHICLES INVOLVED", value: 5 },
        { label: "POLICE VEHICLES DAMAGED", value: 6 },
        { label: "POLICE VEHICLES IMMOBILIZED", value: 9 },
        { label: "ROADBLOCKS DODGED", value: 8 },
        { label: "SPIKE STRIPS DODGED", value: 8 },
        { label: "COST TO STATE ACHIEVED", value: 8 },
        { label: "INFRACTIONS RECORDED", value: 1 },
        { label: "HELICOPTERS DEPLOYED", value: 6 },
        { label: "PURSUIT BOUNTY ACHIEVED", value: 5 },
    ];

    return (

        <div className={styles.rankings}>
            <Header title={"Rankings"} />

            <div className={styles.top}>
                <h2>Name: gabbu</h2>
                <h2>Single Pursuit</h2>
            </div>

            <DottedLine />
            <h2>Select A Category For More Detail:</h2>

            <div className={styles.rankings_scrollable}>

                <ol className={styles.rankings_data}>

                    {rankingCategories.map((data, index) => (
                        <Link key={index} to={`/rankings/${data.label}`} style={{textDecoration: 'none', color: 'inherit'}}>

                            <li key={index} className={styles.data}>
                                <h2 className={styles.category}>{data.label}</h2>
                                <h2 className={styles.value}>{data.value}</h2>

                            </li>

                        </Link>
                    ))}

                </ol>
            </div>
            {window.innerWidth > 1000 && <><DottedLine /> <Footer buttons={buttonData} /></>}
        </div>
    )
}