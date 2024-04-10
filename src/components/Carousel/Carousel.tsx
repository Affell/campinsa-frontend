import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import React from "react";

interface Props {
  items: JSX.Element[];
}

const Carousel: React.FC<Props> = ({ items }) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <>
      <div className="d-none d-md-flex text-center">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="default"
          disableButtonsControls={true}
        />
      </div>
      <div className="d-md-none text-center">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="default"
          disableButtonsControls={true}
        />
      </div>
    </>
  );
};

export default Carousel;
