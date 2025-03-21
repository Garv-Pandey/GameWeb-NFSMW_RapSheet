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
        <h2 className="stats-text">Name: Garv Pandey</h2>
        <h2 className="stats-text">Location: India</h2>
        <h2 className="stats-text">Stats</h2>
        <h2 className="stats-text">Name: Garv Pandey</h2>
        <h2 className="stats-text">Stats</h2>

      </ div>

      <DottedLine className="top-line" />

      <div className="main-menu">
        <h2 className="heading">Main Menu:</h2>
        <Link to="/projects" className="link"><h2 className="page">Page 1</h2></Link>
        <Link to="/projects" className="link"><h2 className="page">Page 2</h2></Link>
        <Link to="/projects" className="link"><h2 className="page">Page 3</h2></Link>
        <Link to="/projects" className="link"><h2 className="page">Page 4</h2></Link>
        <Link to="/projects" className="link"><h2 className="page">Page 5</h2></Link>
        
        

      </div>

      <DottedLine className="bottom-line" />

      <Footer />

    </ div>

  )
}