import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { MainMenu } from './pages/MainMenu.jsx'
import { Summary } from './pages/Summary.jsx'


const router = createBrowserRouter([
  { path: "/", element: <MainMenu /> },
  { path: "/summary", element: <Summary /> }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
