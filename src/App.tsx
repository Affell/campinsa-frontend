import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/home/Home";
import Planning from "./views/planning/Planning";
import Shotgun from "./views/shotgun/Shotgun";
import CariTaxi from "./views/caritaxi/CariTaxi";
import Teams from "./views/teams/Teams";
import Error from "./views/error/Error";
import TeamPage from "./components/TeamPage/TeamPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/shotgun" element={<Shotgun />} />
        <Route path="/caritaxi" element={<CariTaxi />} />
        <Route path="/teams" element={<Teams />} />
        <Route
          path="/*"
          element={
            <Error
              title="404"
              subtitle="La page demandée n'est pas disponible"
            />
          }
        />
        <Route path="/teams/:teamId" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}
