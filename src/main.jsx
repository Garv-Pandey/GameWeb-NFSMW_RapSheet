import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './css/index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { MainMenu } from './pages/MainMenu.jsx'
import { Projects } from './pages/Projects.jsx'


const router = createBrowserRouter([
  { path: "/", element: <MainMenu /> },
  { path: "/projects", element: <Projects /> }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
