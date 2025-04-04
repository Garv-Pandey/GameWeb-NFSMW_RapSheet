import styles from "./DottedLine.module.css"

export function DottedLine({ delay }) {

    return (
        <div style={{ animationDelay: `${delay}ms` }} className={styles.dotted_line}></div>
    )
}