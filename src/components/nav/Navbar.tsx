import "./Navbar.css"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <Navbar expand="lg" className="navbar bg-body-tertiary fixed-top">
            <Container>
                <Navbar.Brand href="/">
                    <img src="src\assets\images\logo.png" width="70" height="70" className="d-inline-block align-top" alt="Logo Camp'INSA" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Accueil</Link>
                        <Link to="/planning">Programme</Link>
                        <Link to="/shotgun">Shotgun</Link>
                        <Link to="/teams">Teams</Link>
                        <Link to="/caritaxi">Cari Taxi</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
