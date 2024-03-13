import NavBar from "../../components/nav/Navbar";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/nav/Footer";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

export default function Home() {
  return <>
    <NavBar />
    <div className="first-container fullscreen-container">
      <div className="text-on-image principal">
        Bienvenue a Camp'INSA
        <div className="text-on-image secondary">En savoir plus</div>
      </div>
    </div>
    <div className="video-container text-center">
      <p>Retrouvez notre film ici !</p>
      <div className="video-player">
        <VideoPlayer videoId="cjaQCkNlYDg"/>
      </div>
    </div>
    <div className="second-container fullscreen-container">
      <div className="sponsors">Nos partenaires</div>
      <div className="carousel">
        <Carousel />
      </div>
    </div>
    <Footer/>
  </>
    ;
};
