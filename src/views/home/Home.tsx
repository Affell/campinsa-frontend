import NavBar from "../../components/nav/Navbar";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/nav/Footer";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import arrowDown from "../../assets/images/arrow.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Caribou from "../../components/Anim/Caribou";

interface HomeProps {
  particlesInit: boolean;
}

export default function Home({ particlesInit }: HomeProps) {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <NavBar />
      <div className="first-container fullscreen-container">
        <div className="bg-image" />
        <motion.div
          className="text-on-image"
          variants={variants}
          initial="hidden"
          animate={isTextVisible ? "visible" : "hidden"}
        >
          {particlesInit && <Caribou />}
          <motion.div
            className="text-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <div className="principal">Bienvenue à Camp'INSA</div>
          </motion.div>
          <div
            className="secondary"
            onClick={() => scrollBy(0, innerHeight - 80 - scrollY)}
          >
            En savoir plus
            <img src={arrowDown} className="arrow-down" />
          </div>
        </motion.div>
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
