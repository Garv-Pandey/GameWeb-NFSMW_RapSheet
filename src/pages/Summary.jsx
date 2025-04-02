import { useState, useEffect, useRef } from "react"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Footer } from "../components/Footer"
import styles from "./Summary.module.css"

export function Summary() {
    const buttonData = [
        { symbol: "Esc", text: "Back" }
    ]

    // event listner which causes rerendre on window size change for footer condition
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const topText = [
        "Name: gabbu",
        "Bounty: 403,300",
        "Cost To State: 399,750",
        "Cars Impounded: 0"
    ]
    const [topTextVisible, setTopTextVisible] = useState([])

    const [bannerClass, setBannerClass] = useState(styles.summary_banner_hidden)

    const bottomTextBlocks = [
        ["Infractions", "Unserverd: 31", "Served: 0"],
        ["Pursuits", "Time Evaded: 8", "Time Busted: 0"],
        ["Fines", "Fines Due: 7,200", "Fines Paid: 0"],
        ["Police Vehicles", "Damaged: 41", "Immobilized: 43"],
    ]
    const [dataBlocksIndexVisible, setDataBlocksIndexVisible] = useState([])

    useEffect(() => {

        // window resize
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        topText.forEach((text, index) => {
            setTimeout(() => {
                setTopTextVisible(prev => [...prev, text])
            }, (index + 1) * 100);
        })

        setTimeout(() => {
            setBannerClass(styles.summary_banner)
        }, 900);

        bottomTextBlocks.forEach((block, index) => {
            setTimeout(() => {
                setDataBlocksIndexVisible(prev => [...prev, index])
            }, 900 + (index + 1) * 100);
        })

        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", handleResize)
    }, []);


    const topTextAnimeClassSetter = (index, text, topTextVisible) => {
        if (topTextVisible.includes(text) && [0, 1].includes(index)) {
            return styles.top_text_white
        }

        if (topTextVisible.includes(text)) {
            return styles.top_text
        }

        return styles.top_text_hidden
    }

    const bottomBlockAnimeSetter = (index, block, bottomTextBlocks) => {
        if (dataBlocksIndexVisible.includes(index)) {
            return styles.data_block
        }

        return styles.data_block_hidden
    }

    return (
        <div className={styles.summary}>
            <Header title={"Summary"} />

            <div className={styles.summary_scrollable}>
                <ul className={styles.top}>

                    {topText.map((text, index) => (
                        <li key={index} className={topTextAnimeClassSetter(index, text, topTextVisible)}>
                            <h2>{text}</h2>
                        </li>
                    ))}

                </ul>

                <DottedLine className={styles.banner} />

                <div className={bannerClass}>
                    <h2>Minor COde INfractions: Perform Routine Check For Citations and Infractions if encountered</h2>
                </div>

                <DottedLine className={styles.banner} />

                <ul className={styles.bottom}>

                    {bottomTextBlocks.map((textBlock, index) => (
                        <li key={index} className={bottomBlockAnimeSetter(index, textBlock, bottomTextBlocks)}>

                            {textBlock.map((text, innerIndex) => ( // Changed index to innerIndex for clarity
                                <h2 key={innerIndex} style={innerIndex == 0 ? { color: "white" } : {}}>{text}</h2>
                            ))}

                        </li>
                    ))}

                </ul>
            </div>

            {window.innerWidth > 1000 && <><DottedLine className={styles.footer}/> <Footer buttons={buttonData} /></>}
        </div>


    )
}