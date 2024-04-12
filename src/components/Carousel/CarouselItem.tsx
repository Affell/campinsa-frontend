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
  className?: string;
  linkTo: string;
}

const CarouselItem = ({
  imagePath,
  primaryText,
  secondaryText,
  height,
  width,
  className,
  linkTo,
}: Props) => {
  return (
    <Container className="item-carousel">
      <Image
        src={imagePath}
        onDragStart={handleDragStart}
        role="presentation"
        height={height}
        width={width}
        className={className}
      />

      <a href={linkTo} target="_blank" className="linkTo">
        <p className="text-carousel">{primaryText}</p>
      </a>
      <p className="text-secondary">{secondaryText}</p>
    </Container>
  );
};

export default CarouselItem;
