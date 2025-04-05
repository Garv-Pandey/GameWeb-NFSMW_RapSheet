import { useState, useEffect, useRef } from "react"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Footer } from "../components/Footer"
import styles from "./CostToState.module.css"

export function CostToState() {
    const buttonData = [
        { symbol: "Esc", text: "Back" }
    ]

    const topText = [
        "Name: gabbu",
        "Bounty: 403,300",
    ]
    const [topTextVisible, setTopTextVisible] = useState([])


    const costData = [
        { qty: 3547, category: "DAMAGE TO PROPERTY", cost: 531850 },
        { qty: 39, category: "INSURANCE CLAIMS", cost: 19500 },
        { qty: 459, category: "PATROL VEHICLES DEPLOYED", cost: 114750 },
        { qty: 98, category: "SPECIAL UNITS DEPLOYED", cost: 44100 },
        { qty: 142, category: "DAMAGED POLICE VEHICLES", cost: 35500 },
        { qty: 132, category: "IMMOBILIZED POLICE VEHICLES", cost: 660000 },
        { qty: 67, category: "ROADBLOCKS DEPLOYED", cost: 33500 },
        { qty: 109, category: "SPIKE STRIPS DEPLOYED", cost: 27250 },
        { qty: 10, category: "HELICOPTERS DEPLOYED", cost: 20000 },
    ];
    const totalCost = (data) => {
        const totalCost = data.reduce((sum, item) => sum + item.cost, 0);
        return totalCost.toLocaleString('en-US');
    };
    const total_cost = totalCost(costData)
    const [totalCostStyle, setTotalCostStyle] = useState(styles.total_cost)

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

        // table header-row background
        setTimeout(() => {
            setnextRowVsible(prev => prev + 1);
        }, 600 + 50)

        // table row background
        costData.forEach((infraction, index) => {
            if (index < costData.length) {
                setTimeout(() => {
                    setnextRowVsible(prev => prev + 1);
                }, 600 + (index + 1) * 50);
            }
        })

        // table columns
        for (let i = 0; i < Object.keys(costData[0]).length; i++) {
            setTimeout(() => {
                setNextColumnVisible(prev => prev + 1)
            }, 600 + (costData.length * 50) + i * 100);
        }

        // cost to state 
        setTimeout(() => {
            setTotalCostStyle(`${styles.total_cost} ${styles.visible}`)
        }, 600 + (costData.length * 50) + 300);

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
        <div className={styles.cost_to_state}>

            <Header title={"Cost To State"} />

            <ul className={styles.top}>
                {topText.map((text, index) => (
                    <li key={index} className={topTextClassSetter(index, text, topTextVisible)}><h2>{text}</h2></li>
                ))}
            </ul>

            <DottedLine delay={300} />

            <div className={styles.costToState_scrollable}>
                <table className={styles.costToState_table}>
                    <thead>
                        <tr className={tableRowClassSetter(0, nextRowVisible)}>
                            <th className={columnClassStter(1, nextColumnVisible)}><h2>QTY</h2></th>
                            <th className={columnClassStter(2, nextColumnVisible)}><h2>CATEGORY</h2></th>
                            <th className={columnClassStter(3, nextColumnVisible)}><h2>COST</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {costData.map((item, index) => (
                            <tr key={index} className={tableRowClassSetter(index + 1, nextRowVisible)}>
                                <td className={columnClassStter(1, nextColumnVisible)}><h2>{item.qty}</h2></td>
                                <td className={columnClassStter(2, nextColumnVisible)} ><h2>{item.category}</h2></td>
                                <td className={columnClassStter(3, nextColumnVisible)} align="center"><h2>{item.cost}</h2></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <DottedLine delay={300} />

            <h2 className={totalCostStyle}>cost To State: {total_cost}</h2>

            <DottedLine delay={300} />

            <Footer buttons={buttonData} />

        </div >

    )
}