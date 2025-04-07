import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { DottedLine } from "../../components/DottedLine"
import styles from "./PursuitDetails.module.css"

export function PursuitDetails() {
    const { id } = useParams()

    const buttonData = [
        { symbol: "Esc", text: "Back" },
    ]

    const topText = [
        "Name: gabbu",
        `id: ${id}`,
    ]
    const [topTextVisible, setTopTextVisible] = useState([])

    const pursuit_details = {
        "MW-0X7I6R3Z": [
            { detail: "PURSUIT LENGTH", value: "9:53.36" },
            { detail: "TOTAL POLICE VEHICLES INVOLVED", value: 74 },
            { detail: "POLICE VEHICLES DAMAGED", value: 28 },
            { detail: "POLICE VEHICLES IMMOBILIZED", value: 9 },
            { detail: "ROADBLOCKS DODGED", value: 14 },
            { detail: "SPIKE STRIPS DODGED", value: 11 },
            { detail: "COST TO STATE ACHIEVED", value: 165300 },
            { detail: "INFRACTIONS RECORDED", value: 8 },
            { detail: "HELICOPTERS DEPLOYED", value: 3 },
            { detail: "PURSUIT BOUNTY ACHIEVED", value: 352500 }
        ],
        "MW-1Q3C3V5T": {
            "pursuitId": "MW-1Q3C3V5T",
            "pursuitLength": "2:35.69",
            "totalPoliceVehiclesInvolved": 31,
            "policeVehiclesDamaged": 6,
            "policeVehiclesImmobilized": 6,
            "roadblocksDodged": 4,
            "spikeStripsDodged": 4,
            "costToStateAchieved": 71325,
            "infractionsRecorded": 8,
            "helicoptersDeployed": 1,
            "pursuitBountyAchieved": 650000
        }
    }

    const [nextRowVisible, setnextRowVsible] = useState(0) //table header is row 0 table body starts form 1

    const [nextColumnVisible, setNextColumnVisible] = useState(1) //first row starts from 1

    const currentPursuit = pursuit_details[id]

    const hasScheduledTimeouts = useRef(false) //to prevent strict mode from mounting useeffect twice and setting the same timeouts twice (sice we are not clearing each timeout on unmount)

    useEffect(() => {

        // top data
        if (hasScheduledTimeouts.current) return;
        hasScheduledTimeouts.current = true;

        // top text
        topText.forEach((text, index) => {
            setTimeout(() => {
                setTopTextVisible(prev => [...prev, text])
            }, (index + 1) * 100);
        })

        // table row background
        currentPursuit.forEach((infraction, index) => {
            if (index < currentPursuit.length) {
                setTimeout(() => {
                    setnextRowVsible(prev => prev + 1);
                }, topText.length + 200 + (index + 1) * 50);
            }
        })

        // table columns
        for (let i = 0; i < Object.keys(currentPursuit[0]).length; i++) {
            setTimeout(() => {
                setNextColumnVisible(prev => prev + 1)
            }, topText.length + 200 + currentPursuit.length * 50 + i * 100);
        }

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

    const rowClassSetter = (is_header, index, nextRowVisible) => {
        if (is_header) {
            if (index < nextRowVisible) {
                return `${styles.row_header} ${styles.visible}`
            }

            return styles.row_header
        }

        if (index < nextRowVisible) {
            return `${styles.row_body} ${styles.visible}`
        }

        return styles.row_body
    }

    const columnClassStter = (is_header, column_no, nextColumnVisible) => {
        const col_style = `col_${column_no}`

        if (is_header || column_no == 1) {
            if (column_no < nextColumnVisible) {
                return `${styles[col_style]} ${styles.visible_text}`
            }

            return styles[col_style]
        }

        if (column_no < nextColumnVisible) {
            return `${styles[col_style]} ${styles.visible_text} ${styles.white}`
        }

        return styles[col_style]
    }

    return (
        <div className={styles.pursuit_details}>
            <Header title={"Pursuit Detial"} />

            <ul className={styles.top}>
                {topText.map((text, index) => (
                    <li key={index} className={topTextClassSetter(index, text, topTextVisible)}><h2>{text}</h2></li>
                ))}
            </ul>

            <DottedLine delay={400} />

            <div className={styles.pursuitDetail_scrollable}>
                <table className={styles.pursuitDetail_table}>
                    <tbody>
                        {currentPursuit.map((item, index) => (
                            <tr key={index} className={rowClassSetter(false, index + 1, nextRowVisible)}>
                                <td className={columnClassStter(false, 1, nextColumnVisible)}><h2>{item.detail}</h2></td>
                                <td className={columnClassStter(false, 2, nextColumnVisible)} ><h2>{item.value}</h2></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <DottedLine delay={400} />

            <Footer buttons={buttonData} />
        </div>


    )
}