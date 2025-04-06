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
    const [topTextVisible, setTopTextVisible] = useState([])

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
        {
            rank: 5,
            carUsed: "Toyota Corolla GT-S",
            id: "MW-9W1C2N9U",
            bounty: 185000,
            length: "3:42.63",
        },
        {
            rank: 7,
            carUsed: "Toyota Corolla GT-S",
            id: "MW-9W1C2N9U",
            bounty: 185000,
            length: "3:42.63",
        },
        {
            rank: 8,
            carUsed: "Toyota Corolla GT-S",
            id: "MW-9W1C2N9U",
            bounty: 185000,
            length: "3:42.63",
        },
    ];

    const [nextRankVisible, setNextRankVisible] = useState(0)


    const hasScheduledTimeouts = useRef(false) //to prevent strict mode from mounting useeffect twice and setting the same timeouts twice (sice we are not clearing each timeout on unmount)

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

    return (
        <div className={styles.top_pursuits}>
            <Header title={"Top 5 Pursuits"} />

            <ul className={styles.top}>
                {topText.map((text, index) => (
                    <li key={index} className={topTextClassSetter(index, text, topTextVisible)}><h2>{text}</h2></li>
                ))}
            </ul>

            <DottedLine delay={topText.length * 100 +100} />
            <div className={styles.topPursuits_scrollable}>

                <ul>

                    {topPursuitsData.map((data, index) => (
                        <Link key={index} to={`/top-pursuits/${data.id}`} className={styles.link}>

                            <li key={index} className={pursuitDataClassSetter(index, nextRankVisible)}>
                                <h2 className={styles.rank}>{data.rank}</h2>
                                <div className={styles.stat}>
                                    <h2 className={styles.car}>Car Used: {data.carUsed}</h2>
                                    <h2 className={styles.detail}>ID: {data.id}</h2>
                                    <h2 className={styles.detail}>Bounty: {data.bounty}</h2>
                                    <h2 className={styles.detail}>Length: {data.length}</h2>
                                </div>
                            </li>

                        </ Link>

                    ))}

                </ul>

            </div>

            <DottedLine delay={topText.length * 100 +100} />

            <Footer buttons={buttonData} />

        </div>
    )
}