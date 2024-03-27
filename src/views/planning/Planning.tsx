import { Col, Container, Image, Row } from "react-bootstrap";
import "./Planning.css";
import NavBar from "../../components/nav/Navbar";
import planningTitle from "../../assets/images/planning/title.svg";
import times from "../../assets/images/planning/times.svg";
import days from "../../assets/images/planning/days.svg";
import Footer from "../../components/nav/Footer";
import events from "../../assets/images/planning/events.svg";
import allos from "../../assets/images/planning/allos.svg";
import allos2 from "../../assets/images/planning/allos2.svg";

export default function Planning() {
  return (
    <>
      <NavBar />
      <Container className="fullscreen-container">
        <Row className="title justify-content-center">
          <Image src={planningTitle} className="image-responsive" />
        </Row>
        <Row className="days justify-content-center">
          <Image src={days} className="image-responsive" />
        </Row>
        <Row>
          <Col className="events d-flex justify-content-center">
            <Image src={times} className="image-responsive-times" />
            <Image src={events} className="image-responsive-events" />
          </Col>
          <Col className="allos d-flex justify-content-center">
            <Image src={allos2} className="image-responsive-allos" />
            <Image src={allos} className="image-responsive-allos2" />
          </Col>
        </Row>
      </Container>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}
