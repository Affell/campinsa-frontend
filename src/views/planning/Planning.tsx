import { Container, Image } from "react-bootstrap";
import "./Planning.css";
import NavBar from "../../components/nav/Navbar";
import Footer from "../../components/nav/Footer";
import planning from "../../assets/images/planning/planning.svg";
import Carousel from "../../components/Carousel/Carousel";
import CarouselItem from "../../components/Carousel/CarouselItem";
import lundi from "../../assets/images/planning/lundi.png";
import mardi from "../../assets/images/planning/mardi.png";
import mercredi from "../../assets/images/planning/mercredi.png";
import jeudi from "../../assets/images/planning/jeudi.png";
import vendredi from "../../assets/images/planning/vendredi.png";
import title from "../../assets/images/planning/title.png";

const items = [
  <CarouselItem
    imagePath={lundi}
    primaryText=""
    secondaryText=""
    height={500}
    width={250}
  />,
  <CarouselItem
    imagePath={mardi}
    primaryText=""
    secondaryText=""
    height={500}
    width={250}
  />,
  <CarouselItem
    imagePath={mercredi}
    primaryText=""
    secondaryText=""
    height={500}
    width={250}
  />,
  <CarouselItem
    imagePath={jeudi}
    primaryText=""
    secondaryText=""
    height={500}
    width={250}
  />,
  <CarouselItem
    imagePath={vendredi}
    primaryText=""
    secondaryText=""
    height={500}
    width={250}
  />,
];

export default function Planning() {
  return (
    <>
      <NavBar />
      <Container className="fullscreen-container d-flex justify-content-center d-none d-md-flex">
        <Image src={planning} fluid className="planning" />
      </Container>
      <Container className="fullscreen-container d-md-none">
        <Image src={title} className="title" fluid />
        <Carousel items={items} />
      </Container>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}
