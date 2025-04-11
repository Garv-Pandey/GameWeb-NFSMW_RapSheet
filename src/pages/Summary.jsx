import { useState, useEffect, useRef } from "react"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Footer } from "../components/Footer"
import styles from "./Summary.module.css"

export function Summary() {
    const buttonData = [
        { symbol: "Esc", text: "Back" }
    ]

    const topText = [
        "Name: GABBU",
        "Bounty: 18,994,300",
        "Cost To State: 3,133,675",
        "Cars Impounded: 0"
    ]

    const bottomTextBlocks = [
        ["Infractions", "Unserverd: 146", "Served: 0"],
        ["Pursuits", "Time Evaded: 34", "Time Busted: 0"],
        ["Fines", "Fines Due: 35,425", "Fines Paid: 0"],
        ["Police Vehicles", "Damaged: 318", "Immobilized: 335"],
    ]

    const [topTextVisible, setTopTextVisible] = useState([])

    const [bannerClass, setBannerClass] = useState(styles.summary_banner)

    const [dataBlocksIndexVisible, setDataBlocksIndexVisible] = useState([])


    const topTextClassSetter = (index, text, topTextVisible) => {
        if (topTextVisible.includes(text) && [0, 1].includes(index)) {
            return `${styles.top_text} ${styles.white} ${styles.visible}`
        }

        if (topTextVisible.includes(text)) {
            return `${styles.top_text} ${styles.visible}`
        }

        return styles.top_text
    }

    const bottomBlockClassSetter = (index, block, bottomTextBlocks) => {
        if (dataBlocksIndexVisible.includes(index)) {
            return `${styles.data_block} ${styles.visible}`
        }

        return styles.data_block
    }


    useEffect(() => {
        topText.forEach((text, index) => {
            setTimeout(() => {
                setTopTextVisible(prev => [...prev, text])
            }, (index + 1) * 100);
        })

        setTimeout(() => {
            setBannerClass(`${styles.summary_banner} ${styles.visible}`)
        }, 800);

        bottomTextBlocks.forEach((block, index) => {
            setTimeout(() => {
                setDataBlocksIndexVisible(prev => [...prev, index])
            }, 800 + (index + 1) * 100);
        })

    }, []);

    return (
        <div className={styles.summary}>
            <Header title={"Summary"} />

            <div className={styles.scrollable_summary}>
                <ul className={styles.top}>

                    {topText.map((text, index) => (
                        <li key={index} className={topTextClassSetter(index, text, topTextVisible)}>
                            <h2>{text}</h2>
                        </li>
                    ))}

                </ul>

                <DottedLine delay={600} />

                <div className={bannerClass}>
                    <h2>Major code infractions: Perform routine check for citations and infractions if encountered. Proceed with caution.</h2>
                </div>

                <DottedLine delay={600} />

                <ul className={styles.bottom}>

                    {bottomTextBlocks.map((textBlock, index) => (
                        <li key={index} className={bottomBlockClassSetter(index, textBlock, bottomTextBlocks)}>

                            {textBlock.map((text, innerIndex) => (
                                <h2 key={innerIndex} className={styles.data_text} style={innerIndex == 0 ? { color: "white" } : {}}>{text}</h2>
                            ))}

                        </li>
                    ))}

                </ul>
            </div>

            <DottedLine delay={1300} />
            <Footer buttons={buttonData} />
        </div>


    )
}