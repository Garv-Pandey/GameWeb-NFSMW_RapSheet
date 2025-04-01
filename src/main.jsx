import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { MainMenu } from './pages/MainMenu.jsx'
import { Summary } from './pages/Summary.jsx'
import { VehicleDatabase } from './pages/VehicleDatabase.jsx'
import { Infractions } from './pages/Infractions.jsx'
import { CostToState } from './pages/CostToState.jsx'
import { TopPursuits } from './pages/TopPursuits.jsx'
import { Rankings } from './pages/Rankings.jsx'


const router = createBrowserRouter([
  { path: "/", element: <MainMenu /> },
  { path: "/summary", element: <Summary /> },
  { path: "/vehicle-database", element: <VehicleDatabase /> },
  { path: "/infractions", element: <Infractions /> },
  { path: "/cost-to-state", element: <CostToState /> },
  { path: "/top-pursuits", element: <TopPursuits /> },
  { path: "/rankings", element: <Rankings /> },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
