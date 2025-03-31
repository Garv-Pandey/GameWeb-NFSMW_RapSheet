import { useState, useEffect } from "react"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Footer } from "../components/Footer"
import "../css/VehicleDatabase.css"

export function VehicleDatabase() {
    const buttonData = [
        { symbol: "Esc", text: "Back" }
    ]

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const topText = [
        "Name: gabbu",
        "Bounty: 403,300",
        "Cost To State: 399,750",
        "Cars Impounded: 0"
    ]
    const [topTextVisible, setTopTextVisible] = useState([])

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
            const scrollableData = document.querySelector('.scrollable-data')
            scrollableData.classList.add('visible')
        }, 800);


        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", handleResize)
    }, []);


    const topTextAnimeClassSetter = (index, text, topTextVisible) => {
        if (topTextVisible.includes(text) && [0, 1].includes(index)) {
            return "top-text-white"
        }

        if (topTextVisible.includes(text)) {
            return "top-text"
        }

        return "top-text-hidden"
    }

    return (

        <div className="vehicleData">
            <Header title="Vehicle Database" />

            <ul className="top">
                {topText.map((text, index) => (
                    <li className={topTextAnimeClassSetter(index, text, topTextVisible)}><h2>{text}</h2></li>
                ))}
            </ul>

            <DottedLine />

            <ul className="scrollable-data">
                {vehicleData.map((vehicle, index) =>
                    <li key={index} className="vehicle-info">
                        <h2 className="heading">{vehicle.name}</h2>
                        <h2 className="heading">{vehicle.status}</h2>
                        <h2 className="info">Bounty: {vehicle.bounty}</h2>
                        <h2 className="info">Times Evaded: {vehicle.timesEvaded}</h2>
                        <h2 className="info">Fines Due: {vehicle.finesDue}</h2>
                        <h2 className="info">Times Busted: {vehicle.timesBusted}</h2>
                        <h2 className="info">Unserved Infractions: {vehicle.unservedInfractions}</h2>
                    </li>
                )}

            </ul>
            {window.innerWidth > 1000 && <><DottedLine /> <Footer buttons={buttonData} /></>}
        </div>
    )
}