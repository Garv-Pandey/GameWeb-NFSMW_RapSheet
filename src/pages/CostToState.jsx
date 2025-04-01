import { useState, useEffect } from "react"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Footer } from "../components/Footer"
import "../css/CostToState.css"

export function CostToState() {
    const buttonData = [
        { symbol: "Esc", text: "Back" }
    ]

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    return (
        <div className="cost-to-state">

            <Header title={"Cost To State"} />

            <div className="top">
                <h2>Name: gabbu</h2>
                <h2 className="bounty">Bounty: 6,580,800</h2>
            </div>

            <DottedLine />

            <div className="cost-data">
                <table>
                    <thead>
                        <tr>
                            <th><h2>QTY</h2></th>
                            <th><h2>CATEGORY</h2></th>
                            <th><h2>COST</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {costData.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                <td><h2>{item.qty}</h2></td>
                                <td align="center"><h2>{item.category}</h2></td>
                                <td align="center"><h2>{item.cost}</h2></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <DottedLine />

            <h2 className="total-cost">cost To State: 1,486,450</h2>

            {window.innerWidth > 1000 && <><DottedLine /> <Footer buttons={buttonData} /></>}

        </div>

    )
}