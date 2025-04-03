import styles from  "./Header.module.css"

export function Header({ title }) {
    return (
        <header className={styles.header}>
            <h1>{title.toUpperCase()}</h1>
        </header>
    )
}