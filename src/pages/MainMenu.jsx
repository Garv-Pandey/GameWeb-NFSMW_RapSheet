import { useState, useEffect, useRef } from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Link } from "react-router-dom"
import styles from './MainMenu.module.css'

export function MainMenu() {
  const buttonData = [
    { symbol: "Esc", text: "Back" },
    { symbol: "↵", text: "Accept" },
  ]

  const stats_text = ["Name: gabbu",
    "Bounty: 33,591,683",
    "Cost To State: 5,399,750",
    "Fines Due: 43,200",
    "Pursuits Evaded: 44",
    "Busted: 0",
    "Cars Impounded: 0",
    "Cars Monitored: 11"]
  

  const pages = [{ link: "/summary", text: "Summary" },
  { link: "/vehicle-database", text: "Vehicle Database" },
  { link: "/infractions", text: "Infractions" },
  { link: "/cost-to-state", text: "Cost To State" },
  { link: "/top-pursuits", text: "Top 5 Pursuits" },
  { link: "/rankings", text: "Rankings" },
  ]

  const [visibleStats, setVisibleStats] = useState([]);

  const [headingClass, setHeadingClass] = useState(styles.menu_heading)

  const [visiblePagesLink, setVisiblePagesLink] = useState([]);


  const statsTextStyleSetter = (index, text, visibleStats) => {
    if (visibleStats.includes(text) && [0, 1].includes(index)) {
      return `${styles.stats_text} ${styles.white} ${styles.visible}`
    }

    if (visibleStats.includes(text)) {
      return `${styles.stats_text} ${styles.visible}`
    }

    return styles.stats_text
  }

  const pageStyleSetter = (index, page, visiblePagesLink) => {
    if (visiblePagesLink.includes(page.link)) {
      return `${styles.page} ${styles.visible}`
    }

    return styles.page
  }


  useEffect(() => {
    // stats_text
    stats_text.forEach((item, index) => {
      setTimeout(() => {
        setVisibleStats((prev) => [...prev, item]);
      }, (index + 1) * 50); // Each item appears 500ms after the previous one
    });

    // menu heading
    setTimeout(() => {
      setHeadingClass(`${styles.menu_heading} ${styles.visible}`)
    }, stats_text.length * 50 + 100 + 200);

    // pages
    pages.forEach((page, index) => {
      setTimeout(() => {
        setVisiblePagesLink((prev) => [...prev, page.link]);
      }, stats_text.length * 50 + 100 + 200 + (index + 1) * 50);
    });

  }, []);


  return (
    <div className={styles.sheet}>
      <Header title={"Rap Sheet"} />


      <ul className={styles.stats}>
        {stats_text.map((text, index) => (
          <li key={index} className={statsTextStyleSetter(index, text, visibleStats)}>
            <h2>{text}</h2>
          </li>
        ))}
      </ul>


      <DottedLine delay={stats_text.length * 50 + 100} />

      <div className={styles.main_menu}>
        <h2 className={headingClass}>Main Menu:</h2>
        <div className={styles.scrollable_menu}>

          <ul >
            {pages.map((page, index) => (
              <Link key={index} to={page.link} className={styles.link}>
                <h2 className={pageStyleSetter(index, page, visiblePagesLink)}>{page.text}</h2>
              </Link>
            ))}
          </ul>
        </div>

      </div>

      <DottedLine delay={stats_text.length * 50 + 100} />

      <Footer buttons={buttonData} />
    </ div>
  )
}