import "react-alice-carousel/lib/alice-carousel.css";
import Container from "react-bootstrap/Container";
import "./CarouselItem.css";

const handleDragStart = (e: React.DragEvent<HTMLImageElement>) =>
  e.preventDefault();

interface Props {
  imagePath: string;
  primaryText: string;
  secondaryText: string;
}

const CarouselItem = ({ imagePath, primaryText, secondaryText }: Props) => {
  return (
    <Container className="item-carousel">
      <img
        src={imagePath}
        onDragStart={handleDragStart}
        role="presentation"
        width={250}
        height={250}
      />
      <p className="text">{primaryText}</p>
      <p className="text-secondary">{secondaryText}</p>
    </Container>
  );
};

export default CarouselItem;
