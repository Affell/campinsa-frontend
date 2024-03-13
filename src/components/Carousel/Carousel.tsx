import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CarouselItem from "./CarouselItem";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <CarouselItem
    imagePath="src\assets\images\partnerships\logoRedBull.jpg"
    primaryText="Red Bull"
    secondaryText="Boisson energisante"
  />,
  <CarouselItem
    imagePath="src\assets\images\partnerships\logoLyfPay.png"
    primaryText="Lyf Pay"
    secondaryText="Paiement mobile"
  />,
  <CarouselItem
    imagePath="src\assets\images\partnerships\logoDivertyBox.jpg"
    primaryText="Diverty Box"
    secondaryText="Bar"
  />,
  <CarouselItem
    imagePath="src\assets\images\partnerships\logoLeon.PNG"
    primaryText="Leon"
    secondaryText="Restaurant"
  />,
  <CarouselItem
    imagePath="src\assets\images\partnerships\logoMieCaline.jpg"
    primaryText="La Mie Caline"
    secondaryText="Boulangerie"
  />,
];

const Carousel = () => {
  return (
    <>
    <div className="d-none d-md-flex text-center">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="default"
        disableButtonsControls={true}
        paddingLeft={50}
      />
    </div>
    <div className="d-md-none">
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="default"
      disableButtonsControls={true}
      paddingLeft={50}
    />
    </div>
    </>
  );
};

export default Carousel;
