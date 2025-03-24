import { useState, useEffect } from "react";
import { Button } from "./Button";
import "../css/Footer.css";

export function Footer({ buttons }) {
    const texts = ["Text 1", "Text 2", "Text 3"];
    const interval = 3000
    const [text_index, setText_index] = useState(0)

    useEffect(() => {
        const interval_id = setInterval(() => {
            setText_index(t => (t + 1) % texts.length)
        }, interval);

        return () => clearInterval(interval_id)
    }, [])

    return (

        <div className="footer">
            <div className="banner-panel">
                <h2 key={text_index} id="dynamic-text" className="banner-text" style={{ animation: `slideUp ${interval}ms linear infinite` }}>{texts[text_index]}</h2>
            </div>

            <div className="button-panel">

                {buttons.map((btn, index) => (
                    <Button key={index} symbol={btn.symbol} text={btn.text} />
                ))}
            </div>

        </div>
    )
}