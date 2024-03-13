import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import NavBarToogler from "./NavBarToggler";
import { useCycle } from "framer-motion";
// import { useEffect, useState } from "react";

export default function NavBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  // const [opacity, setOpacity] = useState(-1);

  // const handleScroll = () => {
  //   const newOpacity = 0.9;
  //   setOpacity(newOpacity);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <Navbar
      expanded={isOpen}
      expand="lg"
      className="navbar bg-body-tertiary fixed-top"
      // style={{ opacity }}
    >
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src="src\assets\images\logo.png"
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Logo Camp'INSA"
          />
        </Link>
        <NavBarToogler toggle={toggleOpen} isOpen={isOpen} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Accueil
            </Link>
            <Link className="nav-link" to="/planning">
              Programme
            </Link>
            <Link className="nav-link" to="/shotgun">
              Shotgun
            </Link>
            <Link className="nav-link" to="/teams">
              Teams
            </Link>
            <Link className="nav-link" to="/caritaxi">
              CariTaxi
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
