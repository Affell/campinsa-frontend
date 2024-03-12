import NavBar from "../../components/nav/Navbar";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";

export default function Home() {
  return <>
    <NavBar />
    <div className="first-container fullscreen-container">
      <div className="text-on-image principal">
        Bienvenue a Camp'INSA
        <div className="text-on-image secondary">En savoir plus</div>
      </div>
    </div>
    <div className="second-container fullscreen-container">
      <div className="sponsors">Nos partenaires</div>
      <div className="carousel">
        <Carousel />
      </div>
    </div>
  </>
    ;
};
