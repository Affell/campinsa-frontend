import NavBar from "../../components/nav/Navbar";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/nav/Footer";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import arrowDown from "../../assets/images/arrow.png";

interface HomeProps {
  particlesInit: boolean
}

export default function Home({ particlesInit }: HomeProps) {

  return (
    <>
      <NavBar />
      <div className="first-container fullscreen-container">
        <div className="text-on-image principal">
          Bienvenue à Camp'INSA
          <div className="text-on-image secondary" onClick={() => scrollBy(0, innerHeight - 80 - scrollY)}>
            En savoir plus
            <img src={arrowDown} className="arrow-down" />
          </div>

        </div>
      </div>
      <div id="video" className="video-container text-center">
        <p>Retrouvez notre film ici !</p>
        <hr className="w-50 mx-auto mb-1 border-dark-subtle"></hr>
        <div className="video-player">
          <VideoPlayer videoId="cjaQCkNlYDg" />
        </div>
        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>
      </div>
      <div className="second-container">
        <div className="sponsors">Nos partenaires</div>
        <div className="carousel">
          <Carousel />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}
