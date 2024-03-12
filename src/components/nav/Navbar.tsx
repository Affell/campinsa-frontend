import "./Navbar.css"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <Navbar expand="lg" className="navbar bg-body-tertiary fixed-top">
            <Container>
                <Link className="navbar-brand" to="/">
                    <img src="src\assets\images\logo.png" width="70" height="70" className="d-inline-block align-top" alt="Logo Camp'INSA" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Accueil</Link>
                        <Link className="nav-link" to="/planning">Programme</Link>
                        <Link className="nav-link" to="/shotgun">Shotgun</Link>
                        <Link className="nav-link" to="/teams">Teams</Link>
                        <Link className="nav-link" to="/caritaxi">Cari Taxi</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
