import { useState, useEffect, useRef } from "react"
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

    const topText = [
        "Name: gabbu",
        "Bounty: 403,300",
    ]

    const topPursuitsData = [
        {
            rank: 1,
            carUsed: "BMW M3 GTR",
            id: "MW-3Q6I7M9A",
            bounty: 4740000,
            length: "12:01.24",
          },
          {
            rank: 2,
            carUsed: "Subaru Impreza WRX STi",
            id: "MW-2E2H8R3C",
            bounty: 1830000,
            length: "8:10.14",
          },
          {
            rank: 3,
            carUsed: "Subaru Impreza WRX STi",
            id: "MW-1T4B5TOM",
            bounty: 1315500,
            length: "10:36.00",
          },
          {
            rank: 4,
            carUsed: "Subaru Impreza WRX STi",
            id: "MW-2R8V7Q4A",
            bounty: 1305000,
            length: "3:38.18",
          },
          {
            rank: 5,
            carUsed: "Subaru Impreza WRX STi",
            id: "MW-4K7T1J2P",
            bounty: 1140000,
            length: "3:27.24",
          },
    ];

    const [topTextVisible, setTopTextVisible] = useState([])

    const [nextRankVisible, setNextRankVisible] = useState(0)

    const hasScheduledTimeouts = useRef(false) //to prevent strict mode from mounting useeffect twice and setting the same timeouts twice (sice we are not clearing each timeout on unmount)


    const topTextClassSetter = (index, text, topTextVisible) => {
        if (topTextVisible.includes(text) && [0, 1].includes(index)) {
            return `${styles.top_text} ${styles.white} ${styles.visible}`
        }

        if (topTextVisible.includes(text)) {
            return `${styles.top_text} ${styles.visible}`
        }

        return styles.top_text
    }

    const pursuitDataClassSetter = (index, nextRankVisible) => {
        if (index < nextRankVisible) {
            return `${styles.data} ${styles.visible}`
        }

        return styles.data
    }


    useEffect(() => {

        // top data
        if (hasScheduledTimeouts.current) return;
        hasScheduledTimeouts.current = true;

        topText.forEach((text, index) => {
            setTimeout(() => {
                setTopTextVisible(prev => [...prev, text])
            }, (index + 1) * 100);
        })

        topPursuitsData.forEach((data, index) => {
            setTimeout(() => {
                setNextRankVisible(prev => prev + 1)
            }, topText.length * 100 + 200 + (index + 1) * 100);
        })
    })
    

    return (
        <div className={styles.top_pursuits}>
            <Header title={"Top 5 Pursuits"} />

            <ul className={styles.top}>
                {topText.map((text, index) => (
                    <li key={index} className={topTextClassSetter(index, text, topTextVisible)}><h2>{text}</h2></li>
                ))}
            </ul>

            <DottedLine delay={topText.length * 100 + 100} />
            <div className={styles.topPursuits_scrollable}>

                <ul>

                    {topPursuitsData.map((data, index) => (
                        <Link key={index} to={`/top-pursuits/${data.id}`} className={styles.link}>

                            <li key={index} className={pursuitDataClassSetter(index, nextRankVisible)}>
                                <h2 className={styles.rank}>{data.rank}</h2>
                                <div className={styles.stat}>
                                    <h2 className={styles.car}>Car Used: {data.carUsed}</h2>
                                    <h2 className={styles.detail}>ID: {data.id}</h2>
                                    <h2 className={styles.detail}>Bounty: {data.bounty.toLocaleString('en-US')}</h2>
                                    <h2 className={styles.detail}>Length: {data.length}</h2>
                                </div>
                            </li>

                        </ Link>

                    ))}

                </ul>

            </div>

            <DottedLine delay={topText.length * 100 + 100} />

            <Footer buttons={buttonData} />

        </div>
    )
}