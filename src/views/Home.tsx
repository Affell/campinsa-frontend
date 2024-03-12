import NavBar from '../components/nav/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'; 
import LinkCard from '../components/LinkCard/LinkCard';

const Home = () => {
  return (
    <div className="home-container">
        <NavBar/>
      <div className="first-container">
        <div className="text-on-image principal">
          Bienvenue a Camp'INSA
        <div className='text-on-image secondary'>
          En savoir plus
        </div>
        </div>
      </div>
      <div className='second-container'>
        <Container>
          <Row>
            <Col>
              <LinkCard imagePath='src\assets\images\homePage.jpg' to="/programme"/>
            </Col>
            <Col>
              <LinkCard imagePath='src\assets\images\homePage.jpg' to="/programme"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <LinkCard imagePath='src\assets\images\homePage.jpg' to="/programme"/>
            </Col>
            <Col>
              <LinkCard imagePath='src\assets\images\homePage.jpg' to="/programme"/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
