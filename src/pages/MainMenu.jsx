import { useState, useEffect } from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Link } from "react-router-dom"
import '../css/MainMenu.css'

export function MainMenu() {
  const buttonData = [
    { symbol: "↵", text: "Accept" },
    { symbol: "Esc", text: "Back" },
    { symbol: "M", text: "Toggle Sound" }
  ]

  // event listner which causes rerendre on window size change for footer condition
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sheet">
      <Header title={"Rap Sheet"} />


      <div className="stats">
        <h2 className="stats-text">Name: Garv Pandey</h2>
        <h2 className="stats-text">Location: India</h2>
        <h2 className="stats-text">Stats</h2>
        <h2 className="stats-text">Name: Garv Pandey</h2>
        <h2 className="stats-text">Stats</h2>
        <h2 className="stats-text">Stats</h2>

      </ div>

      <DottedLine className="top-line" />

      <div className="main-menu">
        <h2 className="heading">Main Menu:</h2>
        <div className="scrollable-menu">
          <Link to="/projects" className="link"><h2 className="page">Page 1</h2></Link>
          <Link to="/projects" className="link"><h2 className="page">Page 2</h2></Link>
          <Link to="/projects" className="link"><h2 className="page">Page 3</h2></Link>
          <Link to="/projects" className="link"><h2 className="page">Page 4</h2></Link>
          <Link to="/projects" className="link"><h2 className="page">Page 6</h2></Link>
          <Link to="/projects" className="link"><h2 className="page">Page 7</h2></Link>
          <Link to="/projects" className="link"><h2 className="page">Page 8</h2></Link>
        </div>


      </div>

      {/* {console.log(window.innerWidth)} */}

      {window.innerWidth > 1000 && <><DottedLine /> <Footer buttons={buttonData} /></>}

    </ div>

  )
}