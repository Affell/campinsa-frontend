import { Container } from "react-bootstrap";
import NavBar from "../../components/nav/Navbar";
import { useEffect, useState } from "react";
import Socket from "../../core/models/Socket";
import GoogleMap from 'google-map-react';
import { Config } from "../../core/config/global";
import { LocationInfo } from "../../core/models/Location";
import "./CariTaxi.css";
import TaxiMarker from "./TaxiMarker";
import Footer from "../../components/nav/Footer";
import caritaxi from "../../assets/images/caritaxi.png";
import applestore from "../../assets/images/badge/appstore.svg";
import android from "../../assets/images/badge/android.svg";
import listIcon from "../../assets/images/icons/list.png";
import arrowLeft from "../../assets/images/icons/arrow-left.png";
import { useCycle } from "framer-motion";


export default function CariTaxi() {

  const [socket, setSocket] = useState<Socket>();
  const [taxiLocations, setTaxiLocations] = useState<LocationInfo[]>();

  const [listOpen, toggleListOpen] = useCycle(false, true);
  const [taxiFocused, setTaxiFocused] = useState<LocationInfo>();

  const focusOn = (taxi: LocationInfo) => {
    setTaxiFocused(taxi);
  }

  useEffect(() => {
    if (socket?.ws.readyState == 1) {
      socket.on("disconnect", () => {
        setSocket(undefined);
      });
      socket.on("taxiLocation", (data) => {
        setTaxiLocations(data);
      });
      socket.emit("askTaxiLocation", {});
      var id = setInterval(() => {
        socket.emit("askTaxiLocation", {});
      }, 3000);
      return () => {
        clearInterval(id);
      }
    } else {
      var s = new Socket(Config.Urls.WS!);
      s.on("mode", () => {
        s.emit("mode", { mode: "external" });
      })
      s.on("authenticated", () => {
        setSocket(s);
      });
    }
  }, [socket])

  return <>
    <NavBar />
    <Container className="fullscreen-container">
      <div className="header">
        <h1>Cari'Taxi</h1>
        <h2>Salut les campeurs, besoin d'un taxi pour aller camper ?<br />
          Clique sur le bouton commander pour être redirigé vers notre standard !<br />
          Grace à notre appli un taxi te sera automatiquement attribué selon ta localisation, alors prépare toi à embarquer à bord de la fabuleuse aventure Camp'INSA !<br />
          Cordialement votre camping préféré.</h2>
      </div>
      <div className="map-container">
        <GoogleMap
          bootstrapURLKeys={{ key: Config.Key.Maps }}
          defaultCenter={{
            lat: 50.34,
            lng: 3.52
          }}
          center={taxiFocused ? {
            lat: taxiFocused.location.latitude,
            lng: taxiFocused.location.longitude
          } : undefined}
          defaultZoom={13}
        >
          {taxiLocations?.map((taxi, i) => <TaxiMarker key={taxi.name} lat={taxi.location.latitude + i * 100} lng={taxi.location.longitude} name={taxi.name} focused={taxiFocused === taxi} />)}
        </GoogleMap>
        <div className="taxi-list-container">
          <div className={"taxi-list" + (listOpen ? " active" : "")}>
            {taxiLocations !== undefined && taxiLocations?.length > 0 ? <div>
              <h3>Nombre de taxis : {taxiLocations.length}</h3>
              <hr />
              <div className="scroller">
                {taxiLocations.map((taxi, index) => <div className="taxi-list-element" key={index} onClick={() => focusOn(taxi)}>
                  <h5>{taxi.name}</h5>
                  <h6>Thème : {taxi.name}</h6>
                </div>)}
              </div>
            </div> : <h3>Aucun taxi en ligne</h3>}
          </div>

          <div className="round-container" onClick={() => toggleListOpen()}><img src={listOpen ? arrowLeft : listIcon} /></div>
        </div>

      </div>
      <div className="app-info-container">
        <div className="app-info">
          <img src={caritaxi} />
          <h1>Disponible partout !</h1>
          <div className="download-container">
            <a className="dl-link" href={Config.Urls.API + "/taxi/download/ios"} target="_blank"><img src={applestore} /></a>
            <a className="dl-link" href={Config.Urls.API + "/taxi/download/android"} target="_blank"><img src={android} /></a>
          </div>
        </div>
      </div>
    </Container>
    <Footer />
  </>
}