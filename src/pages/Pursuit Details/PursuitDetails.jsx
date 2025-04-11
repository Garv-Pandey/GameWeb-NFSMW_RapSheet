import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { DottedLine } from "../../components/DottedLine"
import styles from "./PursuitDetails.module.css"

export function PursuitDetails() {

    const buttonData = [
        { symbol: "Esc", text: "Back" },
    ]

    const topText = [
        "Name: gabbu",
        `id: ${useParams().id}`,
    ]

    const pursuit_details = {
        "MW-3Q6I7M9A": [
            { detail: "PURSUIT LENGTH", value: "12:01.24" },
            { detail: "TOTAL POLICE VEHICLES INVOLVED", value: 121 },
            { detail: "POLICE VEHICLES DAMAGED", value: 43 },
            { detail: "POLICE VEHICLES IMMOBILIZED", value: 45 },
            { detail: "ROADBLOCKS DODGED", value: 22 },
            { detail: "SPIKE STRIPS DODGED", value: 16 },
            { detail: "COST TO STATE ACHIEVED", value: 396225 },
            { detail: "INFRACTIONS RECORDED", value: 7 },
            { detail: "HELICOPTERS DEPLOYED", value: 3 },
            { detail: "PURSUIT BOUNTY ACHIEVED", value: 4740000 }
        ],
        "MW-2E2H8R3C": [
            { detail: "PURSUIT LENGTH", value: "8:10.14" },
            { detail: "TOTAL POLICE VEHICLES INVOLVED", value: 68 },
            { detail: "POLICE VEHICLES DAMAGED", value: 26 },
            { detail: "POLICE VEHICLES IMMOBILIZED", value: 27 },
            { detail: "ROADBLOCKS DODGED", value: 13 },
            { detail: "SPIKE STRIPS DODGED", value: 8 },
            { detail: "COST TO STATE ACHIEVED", value: 250325 },
            { detail: "INFRACTIONS RECORDED", value: 5 },
            { detail: "HELICOPTERS DEPLOYED", value: 3 },
            { detail: "PURSUIT BOUNTY ACHIEVED", value: 1830000 }
        ],
        "MW-1T4B5TOM": [
            { detail: "PURSUIT LENGTH", value: "10:36.00" },
            { detail: "TOTAL POLICE VEHICLES INVOLVED", value: 76 },
            { detail: "POLICE VEHICLES DAMAGED", value: 36 },
            { detail: "POLICE VEHICLES IMMOBILIZED", value: 33 },
            { detail: "ROADBLOCKS DODGED", value: 19 },
            { detail: "SPIKE STRIPS DODGED", value: 11 },
            { detail: "COST TO STATE ACHIEVED", value: 312975 },
            { detail: "INFRACTIONS RECORDED", value: 7 },
            { detail: "HELICOPTERS DEPLOYED", value: 2 },
            { detail: "PURSUIT BOUNTY ACHIEVED", value: 1315500 }
        ],
        "MW-2R8V7Q4A": [
            { detail: "PURSUIT LENGTH", value: "3:38.18" },
            { detail: "TOTAL POLICE VEHICLES INVOLVED", value: 55 },
            { detail: "POLICE VEHICLES DAMAGED", value: 17 },
            { detail: "POLICE VEHICLES IMMOBILIZED", value: 13 },
            { detail: "ROADBLOCKS DODGED", value: 7 },
            { detail: "SPIKE STRIPS DODGED", value: 6 },
            { detail: "COST TO STATE ACHIEVED", value: 136775 },
            { detail: "INFRACTIONS RECORDED", value: 7 },
            { detail: "HELICOPTERS DEPLOYED", value: 2 },
            { detail: "PURSUIT BOUNTY ACHIEVED", value: 1305000 }
        ],
        "MW-4K7T1J2P": [
            { detail: "PURSUIT LENGTH", value: "3:27.24" },
            { detail: "TOTAL POLICE VEHICLES INVOLVED", value: 52 },
            { detail: "POLICE VEHICLES DAMAGED", value: 6 },
            { detail: "POLICE VEHICLES IMMOBILIZED", value: 11 },
            { detail: "ROADBLOCKS DODGED", value: 4 },
            { detail: "SPIKE STRIPS DODGED", value: 3 },
            { detail: "COST TO STATE ACHIEVED", value: 113625 },
            { detail: "INFRACTIONS RECORDED", value: 5 },
            { detail: "HELICOPTERS DEPLOYED", value: 1 },
            { detail: "PURSUIT BOUNTY ACHIEVED", value: 1140000 }
        ],
    }

    const [topTextVisible, setTopTextVisible] = useState([])

    const [nextRowVisible, setnextRowVsible] = useState(0) //table header is row 0 table body starts form 1

    const [nextColumnVisible, setNextColumnVisible] = useState(1) //first row starts from 1

    const currentPursuit = pursuit_details[useParams().id]

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


    useEffect(() => {

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
                }, topText.length + 100 + 100 + (index + 1) * 50);
            }
        })

        // table columns
        for (let i = 0; i < Object.keys(currentPursuit[0]).length; i++) {
            setTimeout(() => {
                setNextColumnVisible(prev => prev + 1)
            }, (topText.length + 100 + 100 + currentPursuit.length * 50) + (i + 1) * 100);
        }

    })


    return (
        <div className={styles.pursuit_details}>
            <Header title={"Pursuit Detial"} />

            <ul className={styles.top}>
                {topText.map((text, index) => (
                    <li key={index} className={topTextClassSetter(index, text, topTextVisible)}><h2>{text}</h2></li>
                ))}
            </ul>

            <DottedLine delay={topText.length + 100} />

            <div className={styles.pursuitDetail_scrollable}>
                <table className={styles.pursuitDetail_table}>
                    <tbody>
                        {currentPursuit.map((item, index) => (
                            <tr key={index} className={rowClassSetter(false, index + 1, nextRowVisible)}>
                                <td className={columnClassStter(false, 1, nextColumnVisible)}><h2>{item.detail}</h2></td>
                                <td className={columnClassStter(false, 2, nextColumnVisible)} ><h2>{item.value.toLocaleString('en-US')}</h2></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <DottedLine delay={topText.length + 100} />

            <Footer buttons={buttonData} />
        </div>


    )
}