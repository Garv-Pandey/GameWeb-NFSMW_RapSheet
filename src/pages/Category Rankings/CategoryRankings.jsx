import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { Header } from "../../components/Header"
import { DottedLine } from "../../components/DottedLine"
import { Footer } from "../../components/Footer"

import styles from "./CategoryRankings.module.css"

export function CategoryRankings() {

    const buttonData = [
        { symbol: "Esc", text: "Back" }
    ]

    const topText = [
        `Category: ${useParams().category}`,
        "Single Pursuit",
    ]

    const rankingsDetails = {
        "PURSUIT LENGTH": [
            { rank: 1, name: 'Razor', car: 'BMW M3 GTR', value: '30:00' },
            { rank: 2, name: 'Bull', car: 'Mercedes-Benz SLR McLaren', value: '28:00' },
            { rank: 3, name: 'Ronnie', car: 'Aston Martin DB9', value: '26:00' },
            { rank: 4, name: 'JV', car: 'Dodge Viper SRT10', value: '20:00' },
            { rank: 5, name: 'Webster', car: 'Corvette C6', value: '15:00' },
            { rank: 6, name: 'GABBU', car: 'BMW M3 GTR', value: '12:01' },
            { rank: 7, name: 'Ming', car: 'Lamborghini Gallardo', value: '10:00' },
            { rank: 8, name: 'Kaze', car: 'Mercedes-Benz CLK 500', value: '9:00' },
            { rank: 9, name: 'Jewels', car: 'Ford Mustang GT', value: '8:00' },
            { rank: 10, name: 'Earl', car: 'Mitsubishi Lancer EVOLUTION VIII', value: '7:00' },
            { rank: 11, name: 'Baron', car: 'Porsche Cayman S', value: '6:00' },
            { rank: 12, name: 'Big Lou', car: 'Mitsubishi Eclipse', value: '5:00' },
            { rank: 13, name: 'Izzy', car: 'Mazda RX-8', value: '4:00' },
            { rank: 14, name: 'Vic', car: 'Toyota Supra', value: '3:00' },
            { rank: 15, name: 'Taz', car: 'Lexus IS300', value: '2:00' },
        ],

        "TOTAL POLICE VEHICLES INVOLVED": [
            { rank: 1, name: 'Big Lou', car: 'Mitsubishi Eclipse', value: 150 },
            { rank: 2, name: 'Bull', car: 'Mercedes-Benz SLR McLaren', value: 125 },
            { rank: 3, name: 'GABBU', car: 'BMW M3 GTR', value: 121 },
            { rank: 4, name: 'Ronnie', car: 'Aston Martin DB9', value: 100 },
            { rank: 5, name: 'JV', car: 'Dodge Viper SRT10', value: 75 },
            { rank: 6, name: 'Sonny', car: 'VW Golf GTI', value: 50 },
            { rank: 7, name: 'Ming', car: 'Lamborghini Gallardo', value: 30 },
            { rank: 8, name: 'Kaze', car: 'Mercedes-Benz CLK 500', value: 25 },
            { rank: 9, name: 'Jewels', car: 'Ford Mustang GT', value: 20 },
            { rank: 10, name: 'Earl', car: 'Mitsubishi Lancer EVOLUTION VIII', value: 15 },
            { rank: 11, name: 'Baron', car: 'Porsche Cayman S', value: 12 },
            { rank: 12, name: 'Razor', car: 'BMW M3 GTR', value: 10 },
            { rank: 13, name: 'Izzy', car: 'Mazda RX-8', value: 8 },
            { rank: 14, name: 'Vic', car: 'Toyota Supra', value: 6 },
            { rank: 15, name: 'Taz', car: 'Lexus IS300', value: 4 },
        ],

        "POLICE VEHICLES DAMAGED": [
            { rank: 1, name: 'Taz', car: 'Lexus IS300', value: 50 },
            { rank: 2, name: 'Razor', car: 'BMW M3 GTR', value: 45 },
            { rank: 3, name: 'GABBU', car: 'BMW M3 GTR', value: 43 },
            { rank: 4, name: 'Ronnie', car: 'Aston Martin DB9', value: 40 },
            { rank: 5, name: 'JV', car: 'Dodge Viper SRT10', value: 35 },
            { rank: 6, name: 'Webster', car: 'Corvette C6', value: 30 },
            { rank: 7, name: 'Ming', car: 'Lamborghini Gallardo', value: 25 },
            { rank: 8, name: 'Kaze', car: 'Mercedes-Benz CLK 500', value: 20 },
            { rank: 9, name: 'Jewels', car: 'Ford Mustang GT', value: 15 },
            { rank: 10, name: 'Earl', car: 'Mitsubishi Lancer EVOLUTION VIII', value: 12 },
            { rank: 11, name: 'Baron', car: 'Porsche Cayman S', value: 10 },
            { rank: 12, name: 'Big Lou', car: 'Mitsubishi Eclipse', value: 8 },
            { rank: 13, name: 'Izzy', car: 'Mazda RX-8', value: 6 },
            { rank: 14, name: 'Vic', car: 'Toyota Supra', value: 4 },
            { rank: 15, name: 'Bull', car: 'Mercedes-Benz SLR McLaren', value: 2 },
        ],

        "POLICE VEHICLES IMMOBILIZED": [
            { rank: 1, name: 'Taz', car: 'Lexus IS300', value: 50 },
            { rank: 2, name: 'GABBU', car: 'BMW M3 GTR', value: 45 },
            { rank: 3, name: 'Razor', car: 'BMW M3 GTR', value: 45 },
            { rank: 4, name: 'Ronnie', car: 'Aston Martin DB9', value: 40 },
            { rank: 5, name: 'JV', car: 'Dodge Viper SRT10', value: 35 },
            { rank: 6, name: 'Webster', car: 'Corvette C6', value: 30 },
            { rank: 7, name: 'Ming', car: 'Lamborghini Gallardo', value: 25 },
            { rank: 8, name: 'Kaze', car: 'Mercedes-Benz CLK 500', value: 20 },
            { rank: 9, name: 'Jewels', car: 'Ford Mustang GT', value: 18 },
            { rank: 10, name: 'Earl', car: 'Mitsubishi Lancer EVOLUTION VIII', value: 15 },
            { rank: 11, name: 'Baron', car: 'Porsche Cayman S', value: 12 },
            { rank: 12, name: 'Big Lou', car: 'Mitsubishi Eclipse', value: 10 },
            { rank: 13, name: 'Izzy', car: 'Mazda RX-8', value: 8 },
            { rank: 14, name: 'Vic', car: 'Toyota Supra', value: 6 },
            { rank: 15, name: 'Bull', car: 'Mercedes-Benz SLR McLaren', value: 4 },
        ],

        "ROADBLOCKS DODGED": [
            { rank: 1, name: 'Razor', car: 'BMW M3 GTR', value: 30 },
            { rank: 2, name: 'Bull', car: 'Mercedes-Benz SLR McLaren', value: 26 },
            { rank: 3, name: 'Ronnie', car: 'Aston Martin DB9', value: 24 },
            { rank: 4, name: 'GABBU', car: 'BMW M3 GTR', value: 22 },
            { rank: 5, name: 'JV', car: 'Dodge Viper SRT10', value: 22 },
            { rank: 6, name: 'Webster', car: 'Corvette C6', value: 20 },
            { rank: 7, name: 'Ming', car: 'Lamborghini Gallardo', value: 18 },
            { rank: 8, name: 'Kaze', car: 'Mercedes-Benz CLK 500', value: 16 },
            { rank: 9, name: 'Jewels', car: 'Ford Mustang GT', value: 14 },
            { rank: 10, name: 'Earl', car: 'Mitsubishi Lancer EVOLUTION VIII', value: 12 },
            { rank: 11, name: 'Baron', car: 'Porsche Cayman S', value: 10 },
            { rank: 12, name: 'Big Lou', car: 'Mitsubishi Eclipse', value: 8 },
            { rank: 13, name: 'Izzy', car: 'Mazda RX-8', value: 6 },
            { rank: 14, name: 'Vic', car: 'Toyota Supra', value: 4 },
            { rank: 15, name: 'Taz', car: 'Lexus IS300', value: 2 },
        ],

        "SPIKE STRIPS DODGED": [
            { rank: 1, name: 'Razor', car: 'BMW M3 GTR', value: 30 },
            { rank: 2, name: 'Bull', car: 'Mercedes-Benz SLR McLaren', value: 25 },
            { rank: 3, name: 'Ronnie', car: 'Aston Martin DB9', value: 20 },
            { rank: 4, name: 'JV', car: 'Dodge Viper SRT10', value: 18 },
            { rank: 5, name: 'GABBU', car: 'BMW M3 GTR', value: 16 },
            { rank: 6, name: 'Webster', car: 'Corvette C6', value: 16 },
            { rank: 7, name: 'Ming', car: 'Lamborghini Gallardo', value: 14 },
            { rank: 8, name: 'Kaze', car: 'Mercedes-Benz CLK 500', value: 12 },
            { rank: 9, name: 'Jewels', car: 'Ford Mustang GT', value: 10 },
            { rank: 10, name: 'Earl', car: 'Mitsubishi Lancer EVOLUTION VIII', value: 8 },
            { rank: 11, name: 'Baron', car: 'Porsche Cayman S', value: 6 },
            { rank: 12, name: 'Big Lou', car: 'Mitsubishi Eclipse', value: 5 },
            { rank: 13, name: 'Izzy', car: 'Mazda RX-8', value: 4 },
            { rank: 14, name: 'Vic', car: 'Toyota Supra', value: 3 },
            { rank: 15, name: 'Taz', car: 'Lexus IS300', value: 2 },
        ],

        "COST TO STATE ACHIEVED": [
            { rank: 1, name: 'Earl', car: 'Mitsubishi Lancer EVOLUTION VIII', value: 500000 },
            { rank: 2, name: 'Izzy', car: 'Mazda RX-8', value: 450000 },
            { rank: 3, name: 'Ronnie', car: 'Aston Martin DB9', value: 400000 },
            { rank: 4, name: 'GABBU', car: 'BMW M3 GTR', value: 396225 },
            { rank: 5, name: 'JV', car: 'Dodge Viper SRT10', value: 350000 },
            { rank: 6, name: 'Webster', car: 'Corvette C6', value: 300000 },
            { rank: 7, name: 'Ming', car: 'Lamborghini Gallardo', value: 250000 },
            { rank: 8, name: 'Kaze', car: 'Mercedes-Benz CLK 500', value: 200000 },
            { rank: 9, name: 'Jewels', car: 'Ford Mustang GT', value: 150000 },
            { rank: 10, name: 'Razor', car: 'BMW M3 GTR', value: 125000 },
            { rank: 11, name: 'Baron', car: 'Porsche Cayman S', value: 100000 },
            { rank: 12, name: 'Big Lou', car: 'Mitsubishi Eclipse', value: 75000 },
            { rank: 13, name: 'Bull', car: 'Mercedes-Benz SLR McLaren', value: 50000 },
            { rank: 14, name: 'Vic', car: 'Toyota Supra', value: 25000 },
            { rank: 15, name: 'Taz', car: 'Lexus IS300', value: 15000 },
        ],

        "INFRACTIONS RECORDED": [
            { rank: 1, name: 'GABBU', car: 'Subaru Impreza WRX STi', value: 8 },
            { rank: 2, name: 'JV', car: 'Dodge Viper SRT10', value: 7 },
            { rank: 3, name: 'Bull', car: 'Mercedes-Benz SLR McLaren', value: 7 },
            { rank: 4, name: 'Webster', car: 'Corvette C6', value: 7 },
            { rank: 5, name: 'Razor', car: 'BMW M3 GTR', value: 7 },
            { rank: 6, name: 'Ronnie', car: 'Aston Martin DB9', value: 6 },
            { rank: 7, name: 'Ming', car: 'Lamborghini Gallardo', value: 6 },
            { rank: 8, name: 'Kaze', car: 'Mercedes-Benz CLK 500', value: 6 },
            { rank: 9, name: 'Jewels', car: 'Ford Mustang GT', value: 5 },
            { rank: 10, name: 'Earl', car: 'Mitsubishi Lancer EVOLUTION VIII', value: 5 },
            { rank: 11, name: 'Baron', car: 'Porsche Cayman S', value: 5 },
            { rank: 12, name: 'Big Lou', car: 'Mitsubishi Eclipse', value: 4 },
            { rank: 13, name: 'Izzy', car: 'Mazda RX-8', value: 4 },
            { rank: 14, name: 'Vic', car: 'Toyota Supra', value: 3 },
            { rank: 15, name: 'Taz', car: 'Lexus IS300', value: 3 },
        ],

        "HELICOPTERS DEPLOYED": [
            { rank: 1, name: 'Razor', car: 'BMW M3 GTR', value: 5 },
            { rank: 2, name: 'Bull', car: 'Mercedes-Benz SLR McLaren', value: 4 },
            { rank: 3, name: 'Ronnie', car: 'Aston Martin DB9', value: 4 },
            { rank: 4, name: 'JV', car: 'Dodge Viper SRT10', value: 4 },
            { rank: 5, name: 'Webster', car: 'Corvette C6', value: 4 },
            { rank: 6, name: 'GABBU', car: 'Subaru Impreza WRX STi', value: 3 },
            { rank: 7, name: 'Ming', car: 'Lamborghini Gallardo', value: 3 },
            { rank: 8, name: 'Kaze', car: 'Mercedes-Benz CLK 500', value: 3 },
            { rank: 9, name: 'Jewels', car: 'Ford Mustang GT', value: 3 },
            { rank: 10, name: 'Earl', car: 'Mitsubishi Lancer EVOLUTION VIII', value: 3 },
            { rank: 11, name: 'Baron', car: 'Porsche Cayman S', value: 2 },
            { rank: 12, name: 'Big Lou', car: 'Mitsubishi Eclipse', value: 2 },
            { rank: 13, name: 'Izzy', car: 'Mazda RX-8', value: 2 },
            { rank: 14, name: 'Vic', car: 'Toyota Supra', value: 1 },
            { rank: 15, name: 'Taz', car: 'Lexus IS300', value: 1 },
        ],

        "PURSUIT BOUNTY ACHIEVED": [
            { rank: 1, name: 'GABBU', car: 'BMW M3 GTR', value: 4740000 },
            { rank: 2, name: 'Razor', car: 'BMW M3 GTR', value: 1500000 },
            { rank: 3, name: 'Webster', car: 'Corvette C6', value: 1250000 },
            { rank: 4, name: 'Bull', car: 'Mercedes-Benz SLR McLaren', value: 1000000 },
            { rank: 5, name: 'Ronnie', car: 'Aston Martin DB9', value: 750000 },
            { rank: 6, name: 'JV', car: 'Dodge Viper SRT10', value: 500000 },
            { rank: 7, name: 'Ming', car: 'Lamborghini Gallardo', value: 300000 },
            { rank: 8, name: 'Kaze', car: 'Mercedes-Benz CLK 500', value: 200000 },
            { rank: 9, name: 'Jewels', car: 'Ford Mustang GT', value: 150000 },
            { rank: 10, name: 'Earl', car: 'Mitsubishi Lancer EVOLUTION VIII', value: 100000 },
            { rank: 11, name: 'Baron', car: 'Porsche Cayman S', value: 75000 },
            { rank: 12, name: 'Big Lou', car: 'Mitsubishi Eclipse', value: 50000 },
            { rank: 13, name: 'Izzy', car: 'Mazda RX-8', value: 25000 },
            { rank: 14, name: 'Vic', car: 'Toyota Supra', value: 10000 },
            { rank: 15, name: 'Sonny', car: 'VW Golf GTI', value: 5000 },
        ]

    };

    const [topTextVisible, setTopTextVisible] = useState([])

    const currentcategory = rankingsDetails[useParams().category]

    const [nextRowVisible, setnextRowVsible] = useState(1) //table header is row 0 table body starts form 1

    const [nextColumnVisible, setNextColumnVisible] = useState(1) //first row starts from 1

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

            <DottedLine delay={topText.length + 100} />

            <div className={styles.categoryDetail_scrollable}>
                <table className={styles.categoryDetail_table}>
                    <tbody>
                        {currentcategory.map((item, index) => (
                            <tr key={index} className={rowClassSetter(false, index + 1, nextRowVisible)}>
                                <td className={columnClassStter(false, 1, nextColumnVisible)}><h2>{item.rank}</h2></td>
                                <td className={columnClassStter(false, 2, nextColumnVisible)} ><h2>{item.name}</h2></td>
                                <td className={columnClassStter(false, 3, nextColumnVisible)} ><h2>{item.car}</h2></td>
                                <td className={columnClassStter(false, 4, nextColumnVisible)} ><h2>{item.value}</h2></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <DottedLine delay={topText.length * 50 + 100} />

            <Footer buttons={buttonData} />

        </div>

    )
}