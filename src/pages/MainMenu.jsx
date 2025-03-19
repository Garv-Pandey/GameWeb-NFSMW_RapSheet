import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { DottedLine } from "../components/DottedLine"
import { Link } from "react-router-dom"
import '../css/MainMenu.css'

export function MainMenu() {


  return (
    <div className="sheet">
      <Header title={"Rap Sheet"} />


      <div className="stats">
        <h3 className="stats-text">Stats</h3>
        <h3 className="stats-text">Stats</h3>
        <h3 className="stats-text">Stats</h3>
        <h3 className="stats-text">Stats</h3>
        <h3 className="stats-text">Stats</h3>

      </ div>

      <DottedLine className="top-line" />

      <div className="main-menu">
        <h3 className="heading">Main Menu:</h3>
        <Link to="/projects" className="link"><h3 className="page">Page 1</h3></Link>
        <Link to="/projects" className="link"><h3 className="page">Page 2</h3></Link>
        <Link to="/projects" className="link"><h3 className="page">Page 3</h3></Link>
        <Link to="/projects" className="link"></Link>

      </div>

      <DottedLine className="bottom-line" />

      <Footer />

    </ div>

  )
}