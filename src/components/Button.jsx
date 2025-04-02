import styles from "./Button.module.css"

export function Button({ symbol, text }) {

    const handleClick = () => {
        console.log("btn clicked")
    }

    return (
        <button type={styles.button} onClick={handleClick} className={styles.button}>
            <div className={styles.symbol}>
                <h2>{symbol}</h2>
            </div>

            <div className={styles.text}>
                <h2>{text}</h2>
            </div>

        </button>
    )
}