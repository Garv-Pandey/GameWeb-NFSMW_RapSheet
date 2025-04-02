import styles from "./DottedLine.module.css"

export function DottedLine({ className }) {

    return (
        <div className={`${styles.dotted_line} ${className}`}></div>
    )
}