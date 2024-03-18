import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../../components/nav/Navbar";
import LinkCard from "../../components/LinkCard/LinkCard";
import "./Teams.css";
import Footer from "../../components/nav/Footer";

<link
  rel="stylesheet"
  href="https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css"
/>;
<link
  rel="stylesheet"
  href="https://unpkg.com/bs-brain@2.0.3/components/blogs/blog-5/assets/css/blog-5.css"
/>;

export default function Teams() {
  return (
    <Container className="fullscreen-container teams-card">
      <NavBar />
      <h2 className="display-5 mb-4 mb-md-5 text-center">Nos Teams</h2>
      <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />

      <div className="container overflow-hidden">
        <Row className="row gy-4 gy-md-5 gx-xl-6 gy-xl-6 gx-xxl-9 gy-xxl-9">
          <Col className="col-12 col-lg-4">
            <LinkCard
              imagePath="src\assets\images\teams\teamBDS.png"
              text="La Team BDS"
              to="/teams/bds"
            />
          </Col>
          <Col className="col-12 col-lg-4">
            <LinkCard
              imagePath="src\assets\images\teams\bureau.png"
              text="Le Bureau"
              to="/bureau"
            />
          </Col>
          <Col className="col-12 col-lg-4">
            <LinkCard
              imagePath="src\assets\images\teams\teamAlumnis.png"
              text="La Team Alumnis"
              to="/teams/alumnis"
            />
          </Col>
        </Row>
        <Row className="row gy-4 gy-md-5 gx-xl-6 gy-xl-6 gx-xxl-9 gy-xxl-9">
          <Col className="col-12 col-lg-4">
            <LinkCard
              imagePath="src\assets\images\teams\teamBDA.png"
              text="La Team BDA"
              to="/teams/bda"
            />
          </Col>
          <Col className="col-12 col-lg-4">
            <LinkCard
              imagePath="src\assets\images\teams\teamCom.png"
              text="La Team Com"
              to="/teams/com"
            />
          </Col>
          <Col className="col-12 col-lg-4">
            <LinkCard
              imagePath="src\assets\images\teams\teamPartenariat.png"
              text="La Team Partenariat"
              to="/teams/partenariat"
            />
          </Col>
        </Row>
        <Row className="row gy-4 gy-md-5 gx-xl-6 gy-xl-6 gx-xxl-9 gy-xxl-9 justify-content-center">
          <Col className="col-12 col-lg-4">
            <LinkCard
              imagePath="src\assets\images\teams\teamAsso.png"
              text="La Team Assos"
              to="/teams/assos"
            />
          </Col>
          <Col className="col-12 col-lg-4">
            <LinkCard
              imagePath="src\assets\images\teams\teamSoiree.png"
              text="La Team Soiree"
              to="/teams/soiree"
            />
          </Col>
        </Row>
      </div>
      <Footer/>
    </Container>
  );
}
