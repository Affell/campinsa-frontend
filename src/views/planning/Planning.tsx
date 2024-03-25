import { Col, Container, Image, Row } from "react-bootstrap";
import "./Planning.css";
import NavBar from "../../components/nav/Navbar";
import planningTitle from "../../assets/images/planning/title.svg";
import times from "../../assets/images/planning/times.svg"
import days from "../../assets/images/planning/days.svg"
import Footer from "../../components/nav/Footer";
import events from "../../assets/images/planning/events.svg"

export default function Planning() {
  return (
    <>
      <NavBar />
      <Container className="fullscreen-container">
        <Row className="title">
          <Image src={planningTitle} height={50} width={450} />
        </Row>
        <Row className="days">
          <Image src={days}/>
        </Row>
        <Row>
          <Col className="times">
            <Image src={times} height={420}/>
          </Col>
          <Col className="events">
            <Image src={events} height={400}/>
          </Col>
        </Row>
      </Container>
      <div className="footer-container">
        <Footer/>
      </div>
    </>
  );
}
