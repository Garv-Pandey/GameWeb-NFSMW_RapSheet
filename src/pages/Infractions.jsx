import { useState, useEffect, useRef } from "react"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Footer } from "../components/Footer"
import styles from "./Infractions.module.css"

export function Infractions() {
    const buttonData = [
        { symbol: "Esc", text: "Back" }
    ]

    const topText = [
        "Name: gabbu",
        "Bounty: 403,300",
        "Cost To State: 399,750",
        "Cars Impounded: 0",
    ]
    const [topTextVisible, setTopTextVisible] = useState([])

    const infractionData = [
        { infraction: "SPEEDING", unserved: 0, total: 5 },
        { infraction: "EXCESSIVE SPEEDING", unserved: 1, total: 13 },
        { infraction: "RECKLESS DRIVING", unserved: 0, total: 2 },
        { infraction: "RAMMING A POLICE VEHICLE", unserved: 0, total: 16 },
        { infraction: "HIT AND RUN", unserved: 0, total: 9 },
        { infraction: "DAMAGE TO PROPERTY", unserved: 0, total: 18 },
        { infraction: "RESISTING ARREST", unserved: 1, total: 24 },
        { infraction: "DRIVING OFF ROADWAY", unserved: 0, total: 19 },
        { infraction: "DRIVING OFF ROADWAY", unserved: 0, total: 19 },
        { infraction: "DRIVING OFF ROADWAY", unserved: 0, total: 19 },
        { infraction: "DRIVING OFF ROADWAY", unserved: 0, total: 19 },
        { infraction: "DRIVING OFF ROADWAY", unserved: 0, total: 19 },
    ];

    const [nextRowVisible, setnextRowVsible] = useState(0) //table header is row 0 table body starts form 1

    const [nextColumnVisible, setNextColumnVisible] = useState(1) //first row starts from 1

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

        // table row background
        infractionData.forEach((infraction, index) => {
            if (index < infractionData.length + 1) {
                setTimeout(() => {
                    setnextRowVsible(prev => prev + 1);
                }, 600 + (index + 1) * 50);
            }
        })

        // table columns
        for (let i = 0; i < Object.keys(infractionData[0]).length; i++) {
            setTimeout(() => {
                setNextColumnVisible(prev => prev + 1)
            }, (infractionData.length * 50 + 300) + (i + 1) * 100);
        }

    }, []);


    const topTextClassSetter = (index, text, topTextVisible) => {
        if (topTextVisible.includes(text) && [0, 1].includes(index)) {
            return `${styles.top_text} ${styles.white} ${styles.visible}`
        }

        if (topTextVisible.includes(text)) {
            return `${styles.top_text} ${styles.visible}`
        }

        return styles.top_text
    }


    const tableRowClassSetter = (index, nextRowVisible) => {
        if (index < nextRowVisible) {
            return `${styles.tr} ${styles.visible}`
        }

        return styles.tr
    }

    const columnClassStter = (column_no, nextColumnVisible) => {
        if (column_no < nextColumnVisible) {
            return styles.column_visible
        }

        return ''
    }

    return (
        <div className={styles.infractions}>

            <Header title={"Infractions"} />

            <ul className={styles.top}>
                {topText.map((text, index) => (
                    <li key={index} className={topTextClassSetter(index, text, topTextVisible)}><h2>{text}</h2></li>
                ))}
            </ul>

            <DottedLine delay={500} />

            <div className={styles.infractions_scrollable}>
                <table className={styles.infractions_table}>
                    <thead>
                        <tr className={tableRowClassSetter(0, nextRowVisible)}>
                            <th className={columnClassStter(1, nextColumnVisible)}></th>
                            <th className={columnClassStter(2, nextColumnVisible)}><h2>UNSERVED</h2></th>
                            <th className={columnClassStter(3, nextColumnVisible)}><h2>TOTAL</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {infractionData.map((item, index) => (
                            <tr key={index} className={tableRowClassSetter(index + 1, nextRowVisible)}>
                                <td className={columnClassStter(1, nextColumnVisible)}><h2>{item.infraction}</h2></td>
                                <td className={columnClassStter(2, nextColumnVisible)} align="center"><h2>{item.unserved}</h2></td>
                                <td className={columnClassStter(3, nextColumnVisible)} align="center"><h2>{item.total}</h2></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <DottedLine delay={500} />

            <Footer buttons={buttonData} />
        </div>
    )
}