import { useState, useEffect } from "react";
import { Button } from "./Button";
import styles from "./Footer.module.css";

export function Footer({ buttons }) {
    const texts = ["Rockport P.D.", "NFSMW-RapSheet", "Status: Building"];
    const [text_index, setText_index] = useState(0)

    useEffect(() => {
        // Select the element whose animation-duration you want
        // const banner_style = document.querySelector('.banner_panel');
        // Get computed style
        // const animationDuration = styles.banner_panel.getPropertyValue('animation_duration');

        // Convert to number and default to 3000ms if not found
        // const intervalTime = animationDuration ? parseFloat(animationDuration) * 1000 : 3000
        const intervalTime = 3000;

        // Set interval using retrieved value
        const intervalId = setInterval(() => {
            setText_index((t) => (t + 1) % texts.length);
        }, intervalTime);

        return () => clearInterval(intervalId);
    }, [])

    return (

        <div className={styles.footer}>
            <div className={styles.banner_panel}>
                <h2 className={styles.footer_banner}>{texts[text_index]}</h2>
            </div>

            <div className={styles.button_panel}>

                {buttons.map((btn, index) => (
                    <Button key={index} symbol={btn.symbol} text={btn.text} />
                ))}
            </div>

        </div>
    )
}