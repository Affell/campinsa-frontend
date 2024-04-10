import NavBar from "../../components/nav/Navbar";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/nav/Footer";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Caribou from "../../components/Anim/Caribou";
import CarouselItem from "../../components/Carousel/CarouselItem";

import bgImage from "../../assets/images/homePage.jpg";
import redbull from "../../assets/images/partnerships/logoRedBull.jpg";
import lyfpay from "../../assets/images/partnerships/logoLyfPay.png";
import diverty from "../../assets/images/partnerships/logoDivertyBox.jpg";
import cbc from "../../assets/images/partnerships/logoCBC.jpg";

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

  const items = [
    <CarouselItem
      imagePath={redbull}
      primaryText="Red Bull"
      secondaryText="Boisson energisante"
      width={250}
      height={250}
      className="item"
    />,
    <CarouselItem
      imagePath={lyfpay}
      primaryText="Lyf Pay"
      secondaryText="Paiement mobile"
      width={250}
      height={250}
      className="item"
    />,
    <CarouselItem
      imagePath={diverty}
      primaryText="Diverty Box"
      secondaryText="Bar"
      width={250}
      height={250}
      className="item"
    />,
    <CarouselItem
      imagePath={cbc}
      primaryText="Caramels Bonbons Chocolats"
      secondaryText="Confiserie"
      width={250}
      height={250}
      className="item"
    />,
  ];

  return (
    <>
      <NavBar />
      <div className="first-container fullscreen-container">
        <div
          className="bg-image"
          style={{ backgroundImage: "url(" + bgImage + ")" }}
        />
        <motion.div
          className="text-on-image"
          variants={variants}
          initial="hidden"
          animate={isTextVisible ? "visible" : "hidden"}
        >
          {particlesInit && <Caribou color="#ffffff" />}
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
            <div className="arrow-container">
              <div className="arrow-down"></div>
            </div>
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
          <Carousel items={items} />
        </div>
      </div>
      <Footer />
    </>
  );
}
