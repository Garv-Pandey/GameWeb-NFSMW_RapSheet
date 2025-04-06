import styles from "./DottedLine.module.css"

export function DottedLine({ delay = 0 }) {
    return (
        <div className={styles.dotted_line_wrapper}>
            <div
                className={styles.dotted_line}
                style={{ animationDelay: `${delay}ms` }}
            ></div>
        </div>
    )
}