import { useState, useEffect } from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Link } from "react-router-dom"
import '../css/MainMenu.css'

export function MainMenu() {
  const buttonData = [
    { symbol: "Esc", text: "Back" },
    { symbol: "↵", text: "Accept" },
  ]

  // event listner which causes rerendre on window size change for footer condition
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sheet">
      <Header title={"Rap Sheet"} />


      <div className="stats">
        <h2 className="stats-text">Name: gabbu</h2>
        <h2 className="stats-text">Bounty: 403,300</h2>
        <h2 className="stats-text">Cost To State: 399,750</h2>
        <h2 className="stats-text">Fines Due: 7,200</h2>
        <h2 className="stats-text">Pursuits Evaded: 8</h2>
        <h2 className="stats-text">Busted: 0</h2>

      </ div>

      <DottedLine className="top-line" />

      <div className="main-menu">
        <h2 className="heading">Main Menu:</h2>
        <div className="scrollable-menu">
          <Link to="/projects" className="link"><h2 className="page">Summary</h2></Link>
          <Link to="/projects" className="link"><h2 className="page">Vehicle Database</h2></Link>
          <Link to="/projects" className="link"><h2 className="page">Infractions</h2></Link>
          <Link to="/projects" className="link"><h2 className="page">Cost To State</h2></Link>
          <Link to="/projects" className="link"><h2 className="page">Top 5 Pursuits</h2></Link>
          <Link to="/projects" className="link"><h2 className="page">Rankings</h2></Link>
        </div>


      </div>

      {/* {console.log(window.innerWidth)} */}

      {window.innerWidth > 1000 && <><DottedLine /> <Footer buttons={buttonData} /></>}

    </ div>

  )
}