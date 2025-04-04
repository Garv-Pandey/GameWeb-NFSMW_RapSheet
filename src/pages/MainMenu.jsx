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
    "Bounty: 403,300",
    "Cost To State: 399,750",
    "Fines Due: 7,200",
    "Pursuits Evaded: 8",
    "Busted: 0"]
  const [visibleStats, setVisibleStats] = useState([]);

  const [headingClass, setHeadingClass] = useState(styles.menu_heading)

  const pages = [{ link: "/summary", text: "Summary" },
  { link: "/vehicle-database", text: "Vehicle Database" },
  { link: "/infractions", text: "Infractions" },
  { link: "/cost-to-state", text: "Cost To State" },
  { link: "/top-pursuits", text: "Top 5 Pursuits" },
  { link: "/rankings", text: "Rankings" },
  { link: "/rankings", text: "Rankings" },
  { link: "/rankings", text: "Rankings" },
  ]
  const [visiblePagesLink, setVisiblePagesLink] = useState([]);

  const animationInterval = useRef(100) //time in ms

  useEffect(() => {
    let time_elapsed = 0 //ms

    // stats_text
    stats_text.forEach((item, index) => {
      setTimeout(() => {
        setVisibleStats((prev) => [...prev, item]);
      }, (index + 1) * animationInterval.current); // Each item appears 500ms after the previous one
    });
    time_elapsed = stats_text.length * animationInterval.current
    time_elapsed += 500 //dotted line animation

    // menu heading
    setTimeout(() => {
      setHeadingClass(`${styles.menu_heading} ${styles.visible}`)
    }, time_elapsed + animationInterval.current);
    time_elapsed += animationInterval.current

    // pages
    pages.forEach((page, index) => {
      setTimeout(() => {
        setVisiblePagesLink((prev) => [...prev, page.link]);
      }, time_elapsed + (index + 1) * animationInterval.current);
    });

  }, []);


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


      <DottedLine delay={800} />

      <div className={styles.main_menu}>
        <h2 className={headingClass}>Main Menu:</h2>
        <div className={styles.scrollable_menu}>

          <ul >
            {pages.map((page, index) => (
              <Link key={index} to={page.link} >
                <h2 className={pageStyleSetter(index, page, visiblePagesLink)}>{page.text}</h2>
              </Link>
            ))}
          </ul>
        </div>

      </div>

      <DottedLine delay={800} />
      
      <Footer buttons={buttonData} />
    </ div>
  )
}