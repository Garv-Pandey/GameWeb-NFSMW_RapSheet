import { useState, useEffect } from "react"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Footer } from "../components/Footer"
import "../css/Infractions.css"

export function Infractions() {
    const buttonData = [
        { symbol: "Esc", text: "Back" }
    ]

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const topText = [
        "Name: gabbu",
        "Bounty: 403,300",
        "Cost To State: 399,750",
        "Cars Impounded: 0",
    ]
    const [topTextVisible, setTopTextVisible] = useState([])

    const infractionData = [
        { infraction: "SPEEDING", unserved: 0, total: 5 },
        { infraction: "EXCESSIVE SPEEDING", unserved: 1, total: 13 },
        { infraction: "RECKLESS DRIVING", unserved: 0, total: 2 },
        { infraction: "RAMMING A POLICE VEHICLE", unserved: 0, total: 16 },
        { infraction: "HIT AND RUN", unserved: 0, total: 9 },
        { infraction: "DAMAGE TO PROPERTY", unserved: 0, total: 18 },
        { infraction: "RESISTING ARREST", unserved: 1, total: 24 },
        { infraction: "DRIVING OFF ROADWAY", unserved: 0, total: 19 },
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

        // setTimeout(() => {
        //     const scrollableData = document.querySelector('.scrollable-data')
        //     scrollableData.classList.add('visible')
        // }, 800);


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
        <div className="infractions">

            <Header title={"Infractions"} />

            <ul className="top">
                {topText.map((text, index) => (
                    <li className={topTextAnimeClassSetter(index, text, topTextVisible)}><h2>{text}</h2></li>
                ))}
            </ul>

            <DottedLine />

            <div className="infractions-data">
                <table>
                    <thead>
                        <tr>
                            <th></th> {/* Empty header for spacing */}
                            <th><h2>UNSERVED</h2></th>
                            <th><h2>TOTAL</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {infractionData.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                <td><h2>{item.infraction}</h2></td>
                                <td align="center"><h2>{item.unserved}</h2></td>
                                <td align="center"><h2>{item.total}</h2></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {window.innerWidth > 1000 && <><DottedLine /> <Footer buttons={buttonData} /></>}
        </div>
    )
}