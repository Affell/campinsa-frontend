import { Container, Image } from "react-bootstrap";
import "./Planning.css";
import NavBar from "../../components/nav/Navbar";
import Footer from "../../components/nav/Footer";
import planning from "../../assets/images/planning/planning.svg";

export default function Planning() {
  return (
    <>
      <NavBar />
      <Container className="fullscreen-container d-flex justify-content-center">
        <Image src={planning} fluid />
      </Container>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}
