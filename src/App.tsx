import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/home/Home'
import Planning from './views/planning/Planning'
import NavBar from './components/nav/Navbar'
import Shotgun from './views/shotgun/Shotgun'
import CariTaxi from './views/caritaxi/CariTaxi'

export default function App() {
  return <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/shotgun" element={<Shotgun />} />
        <Route path="/caritaxi" element={<CariTaxi />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </>
}
