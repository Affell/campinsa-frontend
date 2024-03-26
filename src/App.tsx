import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./views/home/Home";
import Planning from "./views/planning/Planning";
import Shotgun from "./views/shotgun/Shotgun";
import CariTaxi from "./views/caritaxi/CariTaxi";
import Teams from "./views/teams/Teams";
import Error from "./views/error/Error";
import TeamPage from "./components/TeamPage/TeamPage";
import { useEffect, useLayoutEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";

export default function App() {
  return (
    <BrowserRouter>
      <Inner />
    </BrowserRouter>
  );
}

function Inner() {

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadPolygonMaskPlugin(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <Routes>
    <Route path="/" element={<Home particlesInit={init} />} />
    <Route path="/planning" element={<Planning />} />
    <Route path="/shotgun" element={<Shotgun />} />
    <Route path="/caritaxi" element={<CariTaxi />} />
    <Route path="/teams" element={<Teams />} />
    <Route path="/teams/:teamId" element={<TeamPage />} />
    <Route
      path="/*"
      element={
        <Error
          title="404"
          subtitle="La page demandée n'est pas disponible"
        />
      }
    />
  </Routes>
}
