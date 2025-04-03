import { useState, useEffect } from "react";
import { Button } from "./Button";
import styles from "./Footer.module.css";

export function Footer({ buttons }) {
    const texts = ["Rockport P.D.", "NFSMW-RapSheet", "Status: Building"];
    const [text_index, setText_index] = useState(0)

    useEffect(() => {
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
                <h3 className={styles.footer_banner}>{texts[text_index]}</h3>
            </div>

            <div className={styles.button_panel}>

                {buttons.map((btn, index) => (
                    <Button key={index} symbol={btn.symbol} text={btn.text} />
                ))}
            </div>

        </div>
    )
}