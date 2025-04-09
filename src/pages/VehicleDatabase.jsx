import { useState, useEffect, useRef } from "react"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Footer } from "../components/Footer"
import styles from "./VehicleDatabase.module.css"

export function VehicleDatabase() {
    const buttonData = [
        { symbol: "Esc", text: "Back" }
    ]

    const topText = [
        "Name: gabbu",
        "Bounty: 403,300",
        "Cost To State: 399,750",
        "Cars Impounded: 0"
    ]

    const vehicleData = [
        {
            name: "Toyota Corolla GT-S",
            status: "<CONFIRMED TO DRIVE>",
            bounty: "6,580,800",
            finesDue: "650",
            unservedInfractions: "2",
            timesEvaded: "26",
            timesBusted: "1",
        },
        {
            name: "Mitsubishi Eclipse",
            status: "<SUSPECTED TO DRIVE>",
            bounty: "0",
            finesDue: "0",
            unservedInfractions: "0",
            timesEvaded: "0",
            timesBusted: "0",
        },
        {
            name: "Mitsubishi Lancer EVOLUTION VIII",
            status: "<SUSPECTED TO DRIVE>",
            bounty: "0",
            finesDue: "0",
            unservedInfractions: "0",
            timesEvaded: "0",
            timesBusted: "0",
        },
    ];

    const [topTextVisible, setTopTextVisible] = useState([])

    const [isVisible, setIsVisible] = useState(false);

    
    const topTextAnimeClassSetter = (index, text, topTextVisible) => {
        if (topTextVisible.includes(text) && [0, 1].includes(index)) {
            return `${styles.top_text} ${styles.white} ${styles.visible}`
        }

        if (topTextVisible.includes(text)) {
            return `${styles.top_text} ${styles.visible}`
        }

        return styles.top_text
    }


    useEffect(() => {

        topText.forEach((text, index) => {
            setTimeout(() => {
                setTopTextVisible(prev => [...prev, text])
            }, (index + 1) * 100);
        })

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 800);

    }, []);


    return (

        <div className={styles.vehicleData}>
            <Header title="Vehicle Database" />

            <ul className={styles.top}>
                {topText.map((text, index) => (
                    <li key={index} className={topTextAnimeClassSetter(index, text, topTextVisible)}><h2>{text}</h2></li>
                ))}
            </ul>

            <DottedLine delay={600}/>

            <ul className={`${styles.scrollable_data} ${isVisible ? `${styles.scrollable_data} ${styles.visible}` : ''}`}>

                {vehicleData.map((vehicle, index) =>
                    <li key={index} className={styles.vehicle_info}>
                        <h2 className={styles.heading} style={{color: 'white'}}>{vehicle.name}</h2>
                        <h2 className={styles.heading}>{vehicle.status}</h2>
                        <h2 className={styles.info}>Bounty: {vehicle.bounty}</h2>
                        <h2 className={styles.info}>Times Evaded: {vehicle.timesEvaded}</h2>
                        <h2 className={styles.info}>Fines Due: {vehicle.finesDue}</h2>
                        <h2 className={styles.info}>Times Busted: {vehicle.timesBusted}</h2>
                        <h2 className={styles.info}>Unserved Infractions: {vehicle.unservedInfractions}</h2>
                    </li>
                )}

            </ul>

            <DottedLine delay={600}/>
            <Footer buttons={buttonData} />
        </div>
    )
}