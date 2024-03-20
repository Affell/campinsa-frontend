import { Col, Container, Image, Row } from "react-bootstrap";
import "./Planning.css";
import NavBar from "../../components/nav/Navbar";
import planningTitle from "../../assets/images/planning/planningTitle.png";
import days from "../../assets/images/planning/days.png";
import times from "../../assets/images/planning/times.png";
import ProgrammeGrid from "../../components/Planning/PlanningGrid";

export default function Planning() {
  return (
    <>
      <NavBar />
      <Container className="fullscreen-container">
        <Row>
          <Image src={planningTitle} />
        </Row>
        <Row>
          <Image src={days} />
        </Row>
        <Row>
          <Col>
            <Image src={times} />
          </Col>
          <Col>
            <ProgrammeGrid />
          </Col>
        </Row>
      </Container>
    </>
  );
}
