import { Col, Container, Image, Row } from "react-bootstrap";
import NavBar from "../../components/nav/Navbar";
import "./Shotgun.css";
import soireeOB from "../../assets/images/events/soireeOB.png";
import apremSport from "../../assets/images/events/apremSport.png";

export default function Shotgun() {
  return (
    <>
      <NavBar />
      <Container className="fullscreen-container">
        <p className="title text-start">{"événements".toUpperCase()}</p>
        <Col className="main-pictures">
          <div className="soiree-ob">
            <Image src={soireeOB} fluid />
            <div className="text-overlay top-left">
              <p className="day">{"vendredi".toUpperCase()}</p>
            </div>
            <div className="text-overlay bottom-right">
              <p className="name">Soirée Open Bar</p>
              <p className="shotgun">
                Shotgun Disponible dans: <br /> 3h 45min 12sec
              </p>
            </div>
          </div>
          <div className="aprem-sport">
            <Image src={apremSport} fluid />
            <div className="text-overlay top-right">
              <p className="day">{"jeudi".toUpperCase()}</p>
            </div>
            <div className="text-overlay bottom-left">
              <p className="name">Aprem Sportive</p>
              <p className="shotgun">
                Shotgun Disponible dans: <br /> 3h 45min 12sec
              </p>
            </div>
          </div>
        </Col>
      </Container>
    </>
  );
}
