import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import NavBarToogler from "./NavBarToggler";
import { useCycle } from "framer-motion";
import { Image } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";

export default function NavBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.detail == 5) {
      e.preventDefault();
      alert("OUAIS GROS")
    }
  };

  return (
    <>
      <Navbar
        expanded={isOpen}
        expand="lg"
        className="navbar bg-body-tertiary fixed-top"
        onClick={handleClick}
      >
        <Container>
          <Link className="navbar-brand" to="/">
            <Image
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Logo Camp'INSA"
            />
          </Link>
          <NavBarToogler toggle={toggleOpen} isOpen={isOpen} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <hr className="d-md-none" />
              <Link className="nav-link" to="/">
                Accueil
              </Link>
              <Link className="nav-link" to="/planning">
                Programme
              </Link>
              <Link className="nav-link" to="/shotguns">
                Shotguns
              </Link>
              <Link className="nav-link" to="/teams">
                Teams
              </Link>
              <Link className="nav-link" to="/caritaxi">
                CariTaxi
              </Link>
              <Link className="nav-link" to="/music">
                Musique
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
