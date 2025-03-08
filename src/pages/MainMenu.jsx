import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import '../css/MainMenu.css'

export function MainMenu() {
  return (
    <div className="main-menu">
      <div className="stats">
        <h2>Stats</h2>
      </ div>

      <h2 className="main-menu-heading">Main Menu</h2>

      <div className="pages">
        <h3>Page 1</h3>
        <h3>Page 2</h3>
        <h3>Page 3</h3>
        <h3>Page 4</h3>
      </div>
    </div>
  )
}