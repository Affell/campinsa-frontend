import "react-alice-carousel/lib/alice-carousel.css";
import Container from "react-bootstrap/Container";
import "./CarouselItem.css";
import { Image } from "react-bootstrap";

const handleDragStart = (e: React.DragEvent<HTMLImageElement>) =>
  e.preventDefault();

interface Props {
  imagePath: string;
  primaryText: string;
  secondaryText: string;
  height: number;
  width: number;
}

const CarouselItem = ({
  imagePath,
  primaryText,
  secondaryText,
  height,
  width,
}: Props) => {
  return (
    <Container className="item-carousel">
      <Image
        src={imagePath}
        onDragStart={handleDragStart}
        role="presentation"
        height={height}
        width={width}
      />
      <p className="text-carousel">{primaryText}</p>
      <p className="text-secondary">{secondaryText}</p>
    </Container>
  );
};

export default CarouselItem;
