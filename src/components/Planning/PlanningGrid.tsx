import { Col, Container, Row } from "react-bootstrap";

type JourDetails = {
  matin: string;
  midi: string;
  aprem: string;
  soir: string;
  allos: string;
};

type Programme = {
  [jour: string]: JourDetails;
};

const ProgrammeGrid = () => {
  const programme: Programme = {
    lundi: {
      matin: "P'TIT DEJ'",
      midi: "OPE Burger\n Rap Jeu",
      aprem: "",
      soir: "Diverty Box",
      allos: "Taxi\n Crêpes",
    },
    mardi: {
      matin: "P'TIT DEJ'",
      midi: "OPE Burger\n Rap Jeu",
      aprem: "",
      soir: "Diverty Box",
      allos: "Taxi\n Crêpes",
    },
    mercredi: {
      matin: "P'TIT DEJ'",
      midi: "OPE Burger\n Rap Jeu",
      aprem: "",
      soir: "Diverty Box",
      allos: "Taxi\n Crêpes",
    },
    jeudi: {
      matin: "P'TIT DEJ'",
      midi: "OPE Burger\n Rap Jeu",
      aprem: "",
      soir: "Diverty Box",
      allos: "Taxi\n Crêpes",
    },
    vendredi: {
      matin: "P'TIT DEJ'",
      midi: "OPE Burger\n Rap Jeu",
      aprem: "",
      soir: "Diverty Box",
      allos: "Taxi\n Crêpes",
    },
  };
  return (
    <Container>
      <Row className="justify-content-center">
        {Object.entries(programme).map(([jour, details], idx) => (
          <Col key={idx}>
            <h3>{jour}</h3>
            <p>{details.matin}</p>
            <p>{details.midi}</p>
            <p>{details.aprem}</p>
            <p>{details.soir}</p>
            <p>{details.allos}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProgrammeGrid;
