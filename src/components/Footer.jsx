import { useState, useEffect } from "react";
import { Button } from "./Button";
import "../css/Footer.css";

export function Footer({ buttons }) {
    const texts = ["Rockport P.D.", "Case File: MW-2807-GABB", "Text 3"];
    const [text_index, setText_index] = useState(0)

    useEffect(() => {
        // Select the element whose animation-duration you want
        const banner_style = document.querySelector('.banner-panel');
        // Get computed style
        const animationDuration = getComputedStyle(banner_style).getPropertyValue('animation-duration');

        // Convert to number and default to 3000ms if not found
        const intervalTime = animationDuration ? parseFloat(animationDuration) * 1000 : 3000;

        // Set interval using retrieved value
        const intervalId = setInterval(() => {
            setText_index((t) => (t + 1) % texts.length);
        }, intervalTime);

        return () => clearInterval(intervalId);
    }, [])

    return (

        <div className="footer">
            <div className="banner-panel">
                <h2 className="footer-banner">{texts[text_index]}</h2>
            </div>

            <div className="button-panel">

                {buttons.map((btn, index) => (
                    <Button key={index} symbol={btn.symbol} text={btn.text} />
                ))}
            </div>

        </div>
    )
}