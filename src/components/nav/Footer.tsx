import { Col, Container, Row, Image } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
import tikTokLogo from "../../assets/images/socials/logoTikTok.png";
import instaLogo from "../../assets/images/socials/logoInsta.png";

function Footer() {
  return (
    <Container
      className="footer-container bg-body-tertiary text-black p-4 text-center"
      fluid
    >
      <Row>
        <Col className="text-center">
          <h6 className="title-text">Nous contacter</h6>
          <div className="text-footer">
            <p>Campus Mont Houy</p>
            <p>59313 Valenciennes cedex 9</p>
            <p>Standard: 06 10 10 10 10</p>
            <p>caricampeur@gmail.com</p>
          </div>
        </Col>
        <Col>
          <h6 className="title-text">Nos réseaux</h6>
          <div className="socials">
            <a href="https://www.tiktok.com/@bdeinsahdf?_t=8kdiqYroQHQ&_r=1" target="_blank" rel="noopener noreferrer">
              <Image
                className="social-logo tik-tok-logo"
                src={tikTokLogo}
                alt="TikTok"
                rounded
                width={40}
                height={40}
              />
            </a>
            <a href="https://www.instagram.com/bdeinsahdf?igsh=MXJ4YndjamY1MHljdA==" target="_blank" rel="noopener noreferrer">
              <Image
                className="social-logo instagram-logo"
                src={instaLogo}
                alt="Instagram"
                rounded
                width={40}
                height={40}
              />
            </a>
          </div>
        </Col>
        <Col>
          <h6 className="title-text">About</h6>
          <div className="legals">
            <p>Mentions legales</p>
          </div>
        </Col>
      </Row>
      <div className="footer-copyrigth">
        <p>© Camp'INSA {new Date().getFullYear()} | All right reserved.</p>
      </div>
    </Container>
  );
}

export default Footer;
