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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const stats_text = ["Name: gabbu",
    "Bounty: 403,300",
    "Cost To State: 399,750",
    "Fines Due: 7,200",
    "Pursuits Evaded: 8",
    "Busted: 0"]
  const [visibleStats, setVisibleStats] = useState([]);

  const [headingClass, setHeadingClass] = useState(styles.heading_hidden)

  const pages = [{ link: "/summary", text: "Summary" },
  { link: "/vehicle-database", text: "Vehicle Database" },
  { link: "/infractions", text: "Infractions" },
  { link: "/cost-to-state", text: "Cost To State" },
  { link: "/top-pursuits", text: "Top 5 Pursuits" },
  { link: "/rankings", text: "Rankings" }]
  const [visiblePagesLink, setVisiblePagesLink] = useState([]);

  const animationInterval = useRef(100) //time in ms

  useEffect(() => {
    // window resize
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // animating
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
      setHeadingClass(styles.heading)
    }, time_elapsed + animationInterval.current);
    time_elapsed += animationInterval.current

    // pages
    pages.forEach((page, index) => {
      setTimeout(() => {
        setVisiblePagesLink((prev) => [...prev, page.link]);
      }, time_elapsed + (index + 1) * animationInterval.current); // time_elapsed + (index + 1) * animationInterval.current Each item appears 500ms after the previous one
    });

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const statsTextAnimeClassSetter = (index, text, visibleStats) => {
    if (visibleStats.includes(text) && [0, 1].includes(index)) {
      return styles.stats_text_white
    }

    if (visibleStats.includes(text)) {
      return styles.stats_text
    }

    return styles.stats_text_hidden
  }



  const pageAnimeClassSetter = (index, page, visiblePagesLink) => {
    if (visiblePagesLink.includes(page.link)) {
      return styles.page
    }

    return styles.page_hidden
  }


  return (
    <div className={styles.sheet}>
      <Header title={"Rap Sheet"} />

      <ul className={styles.stats_banner}>
        {stats_text.map((text, index) => (
          <li key={index} className={statsTextAnimeClassSetter(index, text, visibleStats)}>
            <h2>{text}</h2>
          </li>
        ))}
      </ul>


      <DottedLine className={styles.top_line} />

      <div className={styles.main_menu}>
        <h2 className={headingClass}>Main Menu:</h2>

        <ul className={styles.scrollable_menu}>
          {pages.map((page, index) => (
            <Link key={index} to={page.link} className={styles.link}>
              <h2 className={pageAnimeClassSetter(index, page, visiblePagesLink)}>{page.text}</h2>
            </Link>
          ))}
        </ul>

      </div>

      {/* {console.log(window.innerWidth)} */}

      {window.innerWidth > 1000 && <><DottedLine /> <Footer buttons={buttonData} /></>}

    </ div>

  )
}