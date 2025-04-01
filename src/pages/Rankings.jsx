import { useState, useEffect, useRef } from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Link } from "react-router-dom"
import '../css/MainMenu.css'

export function Rankings() {
    const buttonData = [
        { symbol: "Esc", text: "Back" },
        { symbol: "Esc", text: "Back" }
    ]

    const pursuitStatsData = [
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

        <div className="Rankings">
            <Header title={"Rankings"} />

            <div className="top">
                <h2>Name: gabbu</h2>
                <h2 className="bounty">Bounty: 6,580,800</h2>
            </div>
 
            <DottedLine />
            <h2>Select A Category For More Detail</h2>

            <ol className="rankings-data">
                {pursuitStatsData.map((data, index) => (
                    <li key={index} className="data">
                        <h2>{data.label}</h2>
                        <h2>{data.value}</h2>
                        
                    </li>

                ))}

            </ol>
            {window.innerWidth > 1000 && <><DottedLine /> <Footer buttons={buttonData} /></>}
        </div>
    )
}