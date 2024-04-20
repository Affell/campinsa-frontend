import { Col, Container, Row, Image } from "react-bootstrap";
import "./Footer.css";
import tikTokLogo from "../../assets/images/socials/logoTikTok.png";
import instaLogo from "../../assets/images/socials/logoInsta.png";
import ytb from "../../assets/images/socials/logoYoutube.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container
      className="footer-container bg-body-tertiary text-black text-center"
      fluid
    >
      <Row>
        <Col className="text-center">
          <h6 className="title-text">Nous contacter</h6>
          <div className="text-footer">
            <p>Campus Mont Houy</p>
            <p>59313 Valenciennes cedex 9</p>
            {/* <p>
              Standard:{" "}
              <a className="standard" href="tel:+33374471672">
                03 74 47 16 72
              </a>{" "}
            </p> */}
            <p>caricampeur@gmail.com</p>
          </div>
        </Col>
        <Col>
          <h6 className="title-text">Nos réseaux</h6>
          <div className="socials">
            <a
              href="https://www.tiktok.com/@campinsa?_t=8lWrdlh3EC9&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="social-logo mobile-logo"
                src={tikTokLogo}
                alt="TikTok"
                rounded
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://www.instagram.com/camp_insa?igsh=YmJzaHIyemwwdnBv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="social-logo mobile-logo"
                src={instaLogo}
                alt="Instagram"
                rounded
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCOSZWmEHfe9Cmp0cS2VrNGA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="social-logo mobile-logo"
                src={ytb}
                alt="Youtube"
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
            <Link className="nav-link" to="/legal">
              <p>Mentions legales</p>
            </Link>
          </div>
        </Col>
      </Row>
      <div className="footer-copyrigth">
        <p>© Camp'INSA 2024 | All right reserved.</p>
      </div>
    </Container>
  );
}

export default Footer;
