import { useState, useEffect, useRef } from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Link } from "react-router-dom"
import styles from './Rankings.module.css'

export function Rankings() {
    const buttonData = [
        { symbol: "Esc", text: "Back" },
    ]

    const topText = [
        "Name: gabbu",
        "Single Pursuit",
    ]

    const rankingCategories = [
        { label: "PURSUIT LENGTH", value: 1 },
        { label: "TOTAL POLICE VEHICLES INVOLVED", value: 1 },
        { label: "POLICE VEHICLES DAMAGED", value: 1 },
        { label: "POLICE VEHICLES IMMOBILIZED", value: 1 },
        { label: "ROADBLOCKS DODGED", value: 1 },
        { label: "SPIKE STRIPS DODGED", value: 1 },
        { label: "COST TO STATE ACHIEVED", value: 1 },
        { label: "INFRACTIONS RECORDED", value: 1 },
        { label: "HELICOPTERS DEPLOYED", value: 1 },
        { label: "PURSUIT BOUNTY ACHIEVED", value: 1 },
    ];
    
    const [topTextVisible, setTopTextVisible] = useState([])

    const [selectCatgoryTextStyle, setSelectCatgoryTextStyle] = useState(styles.selectCategory_text)
    
    const [nextPageVisible, setNextPageVisible] = useState(0);

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

    const categoryPageStyleSetter = (index, nextPageVisible) => {
        if (index < nextPageVisible) {
            return `${styles.category_page} ${styles.visible}`
        }

        return styles.category_page
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

        // select category text
        setTimeout(() => {
            setSelectCatgoryTextStyle(`${styles.selectCategory_text} ${styles.visible}`)
        }, topText.length * 100 + 100 + 100);


        // category pages
        rankingCategories.forEach((page, index) => {
            setTimeout(() => {
                setNextPageVisible(prev => prev + 1)
            }, topText.length * 100 + 100 + 100 + (index + 1) * 50);
        })
    })


    return (

        <div className={styles.rankings}>
            <Header title={"Rankings"} />


            <ul className={styles.top}>

                {topText.map((text, index) => (

                    <li key={index} className={topTextClassSetter(index, text, topTextVisible)}>
                        <h2>{text}</h2>
                    </li>
                ))}

            </ul>

            <DottedLine delay={300} />

            <div className={styles.rankings_scrollable}>
                <ul >
                    <h2 className={selectCatgoryTextStyle}>Select a category for more detail:</h2>
                    {rankingCategories.map((category, index) => (
                        <Link key={index} to={category.label} className={styles.link}>
                            <div className={categoryPageStyleSetter(index, nextPageVisible)}>
                                <h2 className={styles.category}>{category.label}</h2>
                                <h2 className={styles.value}>{category.value}</h2>
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>

            <DottedLine delay={300} />

            <Footer buttons={buttonData} />
        </div>
    )
}