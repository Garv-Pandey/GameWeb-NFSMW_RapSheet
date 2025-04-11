import styles from "./Button.module.css"

export function Button({ symbol, text }) {

    const handleClick = () => {
        console.log("btn clicked")
    }

    return (
        <></>
        // <button type={styles.button} onClick={handleClick} className={styles.button}>
        //     <div className={styles.symbol}>
        //         <h3>{symbol}</h3>
        //     </div>

        //     <div className={styles.text}>
        //         <h3>{text}</h3>
        //     </div>

        // </button>
    )
}