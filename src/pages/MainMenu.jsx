import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Link } from "react-router-dom"
import '../css/MainMenu.css'

export function MainMenu() {
  return (
    <div className="sheet">
      <Header title={"Rap Sheet"} />


      <div className="stats">
        <h2>Stats</h2>
      </ div>


      <div className="main-menu">
        <h3 className="heading">Main Menu:</h3>
        <Link to="/projects" className="link"><h3 className="page">Page 1</h3></Link>
        <Link to="/projects" className="link"><h3 className="page">Page 2</h3></Link>
        <Link to="/projects" className="link"><h3 className="page">Page 3</h3></Link>
        <Link to="/projects" className="link"></Link>

      </div>



      <Footer />

    </ div>

  )
}