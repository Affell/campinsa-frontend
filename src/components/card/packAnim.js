import { useEffect, useState } from "react";
import "./packAnim.scss";
import Card from "./card";
import video from "../../assets/images/pack/anim.mp4";


function PackAnim({ id, firstname, lastname, surname, score, image, poste, pays }) {

  const [showCountry, setShowCountry] = useState(false);
  const [animCountry, setAnimCountry] = useState(false);
  const [showPoste, setShowPoste] = useState(false);
  const [animPoste, setAnimPoste] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [animCard, setAnimCard] = useState(false);

  useEffect(() => {
    //document.documentElement.style.setProperty('--delay', animCard ? '10s' : '0s');
  }, [animCard]);

  useEffect(() => {

    setTimeout(() => setShowCountry(true), 4600);
    setTimeout(() => setAnimCountry(true), 4700);
    setTimeout(() => setShowCountry(false), 5500);

    setTimeout(() => setShowPoste(true), 5700);
    setTimeout(() => setAnimPoste(true), 5800);
    setTimeout(() => setShowPoste(false), 6600);

    setTimeout(() => setShowCard(true), 7400);
    setTimeout(() => setAnimCard(true), 7500);

  }, []);

  return <>

    <div className="pack-wrapper">
      <video autoPlay muted className="pack-video">
        <source src={video} type="video/mp4" />
      </video>

      {showCountry && <img className={"reveal-country" + (animCountry ? " active" : "")} src={pays} />}
      {showPoste && <h1 className={"reveal-poste" + (animPoste ? " active" : "")}>{poste}</h1>}
      <Card id={id} firstname={firstname} lastname={lastname} surname={surname} score={score} image={image} poste={poste} pays={pays} show={showCard} active={animCard} />
    </div>
  </>;

}

export default PackAnim;