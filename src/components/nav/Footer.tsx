import { Col, Container, Row, Stack, Image } from "react-bootstrap"
import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <Container className="footer-container bg-body-tertiary text-black p-4 text-center" fluid>
        <Row>
            <Col className="text-center">
                <h6>Nous contacter</h6>
                <div className="text-footer">
                    <p>Campus Mont Houy</p>
                    <p>59313 Valenciennes cedex 9</p>
                    <p>Standard: 06 10 10 10 10</p>
                    <p>caricampeur@gmail.com</p>
                </div>
            </Col>
            <Col>
                <h6>Nos reseaux</h6>
                <div className="socials">
                    <Link to={"https://www.youtube.com/watch?v=_NPzWvTD2w8"}>
                        <Image src="src\assets\images\socials\logoTikTok.png" alt="TikTok" rounded width={40} height={40}/>
                    </Link>
                    <Link to={"https://bde.utt.fr/"}>
                        <Image src="src\assets\images\socials\logoInsta.png" alt="Instagram" rounded width={55} height={40}/>
                    </Link>
                </div>
            </Col>
            <Col>
                <h6>About</h6>
                <div className="legals">
                    <p>Mentions legales</p>
                </div>
            </Col>
        </Row>
        <div className="footer-copyrigth">
            <p>
                © Camp'INSA {new Date().getFullYear()} | All right reserved.
            </p>
        </div>
    </Container>
  )
}

export default Footer
