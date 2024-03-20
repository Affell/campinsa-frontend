import { Container } from "react-bootstrap";
import NavBar from "../../components/nav/Navbar";
import { useEffect, useState } from "react";
import Socket from "../../core/models/Socket";
import GoogleMap from 'google-map-react';
import { Config } from "../../core/config/global";
import { LocationInfo } from "../../core/models/Location";
import "./CariTaxi.css";
import TaxiMarker from "./TaxiMarker";

export default function CariTaxi() {

  const [socket, setSocket] = useState<Socket>();
  const [taxiLocations, setTaxiLocations] = useState<LocationInfo[]>();

  useEffect(() => {
    if (socket?.ws.readyState == 1) {
      socket.on("disconnect", () => {
        setSocket(undefined);
      });
      socket.on("updateTaxiLocation", (data) => {
        console.log(data);
        setTaxiLocations(data);
      });
      socket.emit("updateTaxiLocation", {});
      var id = setInterval(() => {
        socket.emit("updateTaxiLocation", {});
      }, 3000);
      return () => {
        clearInterval(id);
      }
    } else {
      var s = new Socket(Config.Urls.WS!);
      s.on("connect", () => {
        setSocket(s);
      });
    }
  }, [socket])

  return <>
    <NavBar />
    <Container className="fullscreen-container">
      <div className="map-container">
        <GoogleMap
          bootstrapURLKeys={{ key: Config.Key.Maps }}
          defaultCenter={{
            lat: 50.34,
            lng: 3.52
          }}
          defaultZoom={13}
        >
          {taxiLocations?.map((taxi) => <TaxiMarker key={taxi.name} lat={taxi.location.latitude} lng={taxi.location.longitude} name={taxi.name} />)}
        </GoogleMap>
      </div>
    </Container >
  </>
}