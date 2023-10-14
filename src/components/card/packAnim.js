import { useEffect, useRef, useState } from "react";
import "./packAnim.scss";
import Card from "./card";
import video from "../../assets/images/pack/anim.mp4";
import green from "../../assets/images/pack/steve.webm";



function PackAnim({ id, firstname, lastname, surname, score, image, poste, pays }) {

  const htmlVideo = useRef(null);
  const [showCountry, setShowCountry] = useState(false);
  const [animCountry, setAnimCountry] = useState(false);
  const [showPoste, setShowPoste] = useState(false);
  const [animPoste, setAnimPoste] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [animCard, setAnimCard] = useState(false);
  const [miniCard, setMiniCard] = useState(false);
  const [greenScreen, setGreenScreen] = useState(false);

  useEffect(() => {
    if (htmlVideo && htmlVideo.current) {
      htmlVideo.current.play().catch(() => {
        window.location.href = "/";
      });
    }
  }, [htmlVideo]);

  useEffect(() => {

    setTimeout(() => setShowCountry(true), 6100);
    // setTimeout(() => setAnimCountry(true), 6150);
    setTimeout(() => setShowCountry(false), 7850);

    setTimeout(() => setShowPoste(true), 7900);
    // setTimeout(() => setAnimPoste(true), 7900);
    setTimeout(() => setShowPoste(false), 9300);

    setTimeout(() => setShowCard(true), 9300);
    setTimeout(() => setAnimCard(true), 10000);

    setTimeout(() => setMiniCard(true), 14000);
    setTimeout(() => setGreenScreen(true), 14000);

  }, []);

  return <>

    <div className="pack-wrapper">
      <video className="pack-video" autoPlay muted playsInline ref={htmlVideo}>
        <source src={video} type="video/mp4" />
      </video>

      {showCountry && <img alt="country" className="reveal-country" src={pays} />}
      {showPoste && <h1 className="reveal-poste">{poste}</h1>}
      <Card className={(miniCard ? "mini" : "")} id={id} firstname={firstname} lastname={lastname} surname={surname} score={score} image={image} poste={poste} pays={pays} show={showCard} active={animCard} />
      {greenScreen && <video className="anim-video" src={green} muted autoPlay />}
    </div>
  </>;

}

export default PackAnim;