import { useState,useEffect } from "react"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Footer } from "../components/Footer"
import "../css/Summary.css"

export function Summary() {
    const buttonData = [
        { symbol: "Esc", text: "Back" }
    ]

    // event listner which causes rerendre on window size change for footer condition
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
      useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
        <div className="summary">
            <Header title="Summary" />

            <div className="summary-scrollable">
                <div className="top-part">

                    <div className="data-block">
                        <h2 style={{ color: "white" }}>Name: gabbu</h2>
                        <h2 style={{ color: "white" }}>Bounty: 403,300</h2>
                        <h2>Cost To State: 399,750</h2>
                        <h2>Cars Impounded: 0</h2>
                    </div>

                </div>

                <DottedLine />

                <div className="summary-banner">
                    <h2>Minor COde INfractions: Perform Routine Check For Citations and Infractions if encountered</h2>
                </div>

                <DottedLine />

                <div className="bottom-part">

                    <div className="data-block">
                        <h2 style={{ color: "white" }}>Infractions</h2>
                        <h2>Unserverd: 31</h2>
                        <h2>Served: 0</h2>
                    </div>
                    <div className="data-block">
                        <h2 style={{ color: "white" }}>Pursuits</h2>
                        <h2>Time Evaded: 8</h2>
                        <h2>Time Busted: 0</h2>
                    </div>
                    <div className="data-block">
                        <h2 style={{ color: "white" }}>Fines</h2>
                        <h2>Fines Due: 7,200</h2>
                        <h2>Fines Paid: 0</h2>
                    </div>
                    <div className="data-block">
                        <h2 style={{ color: "white" }}>Police Vehicles</h2>
                        <h2>Damaged: 41</h2>
                        <h2>Immobilized: 43</h2>
                    </div>

                </div>
            </div>

            {window.innerWidth > 1000 && <><DottedLine /> <Footer buttons={buttonData} /></>}
        </div>


    )
}