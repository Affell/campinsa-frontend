import "./Navbar.css"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return (
        <Navbar expand="lg" className="navbar bg-body-tertiary fixed-top">
            <Container>
                <Navbar.Brand href="/home">
                    <img src="src\assets\images\logo.png" width="70" height="70" className="d-inline-block align-top" alt="Logo Camp'INSA" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Accueil</Nav.Link>
                        <Nav.Link href="/planning">Programme</Nav.Link>
                        <Nav.Link href="/shotgun">Shotgun</Nav.Link>
                        <Nav.Link href="/teams">Teams</Nav.Link>
                        <Nav.Link href="/caritaxi">Cari Taxi</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
