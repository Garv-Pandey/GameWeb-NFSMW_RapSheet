import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { Header } from "../../components/Header"
import { DottedLine } from "../../components/DottedLine"
import { Footer } from "../../components/Footer"

import styles from "./CategoryRankings.module.css"

export function CategoryRankings() {
    const { category } = useParams()
    console.log(category)

    const buttonData = [
        { symbol: "Esc", text: "Back" }
    ]
    const topText = [
        `Category: ${category}`,
        "Single Pursuit",
    ]
    const [topTextVisible, setTopTextVisible] = useState([])

    const rankingsDetails = {
        "PURSUIT LENGTH": [{ rank: 2, name: 'BUll', car: 'Mercedes-Benz SLR McLaren', time: '28:00' },
        { rank: 3, name: 'Ronnie', car: 'Aston Martin DB9', time: '26:00' },
        { rank: 4, name: 'JV', car: 'Dodge Viper SRT10', time: '20:00' },
        { rank: 5, name: 'Webster', car: 'Corvette C6', time: '15:00' },
        { rank: 6, name: 'Ming', car: 'Lamborghini Gallardo', time: '10:00' },
        { rank: 7, name: 'gabbu', car: 'Toyota Corolla GT-S', time: '9:53' },
        { rank: 8, name: 'Kaze', car: 'Mercedes-Benz CLK 500', time: '9:00' },
        { rank: 9, name: 'Jewels', car: 'Ford Mustang GT', time: '8:00' },
        { rank: 10, name: 'Earl', car: 'Mitsubishi Lancer EVOLUTION VIII', time: '7:00' },
        { rank: 11, name: 'Baron', car: 'Porsche Cayman S', time: '6:00' },]
    };
    const currentcategory = rankingsDetails[category]

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
        currentcategory.forEach((infraction, index) => {
            if (index < currentcategory.length) {
                setTimeout(() => {
                    setnextRowVsible(prev => prev + 1);
                }, topText.length + 200 + (index + 1) * 50);
            }
        })

        // table columns
        for (let i = 0; i < Object.keys(currentcategory[0]).length; i++) {
            setTimeout(() => {
                setNextColumnVisible(prev => prev + 1)
            }, topText.length + 200 + currentcategory.length * 50 + i * 100);
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

        if (is_header || column_no == 2) {
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
        <div className={styles.categoryRanking}>
            <Header title={"Rankings"} />


            <ul className={styles.top}>

                {topText.map((text, index) => (

                    <li key={index} className={topTextClassSetter(index, text, topTextVisible)}>
                        <h2>{text}</h2>
                    </li>
                ))}

            </ul>

            <DottedLine />

            <div className={styles.categoryDetail_scrollable}>
                <table className={styles.categoryDetail_table}>
                    <tbody>
                        {currentcategory.map((item, index) => (
                            <tr key={index} className={rowClassSetter(false, index + 1, nextRowVisible)}>
                                <td className={columnClassStter(false, 1, nextColumnVisible)}><h2>{item.rank}</h2></td>
                                <td className={columnClassStter(false, 2, nextColumnVisible)} ><h2>{item.name}</h2></td>
                                <td className={columnClassStter(false, 3, nextColumnVisible)} ><h2>{item.car}</h2></td>
                                <td className={columnClassStter(false, 4, nextColumnVisible)} ><h2>{item.time}</h2></td>
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