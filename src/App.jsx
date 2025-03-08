import './css/App.css'
import { MainMenu } from './pages/MainMenu'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <div className='sheet'>
        <Header title={"Rap Sheet"}/>
        <MainMenu />
        <Footer />
      </div>
    </>
  )
}

export default App
