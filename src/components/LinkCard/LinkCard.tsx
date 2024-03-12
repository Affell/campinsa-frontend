import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'


interface Props{
    imagePath: string;
    to: string;
}

const LinkCard = ({imagePath, to}:Props) => {
  return (
    <Container>
        <Link className="nav-link" to={to}>
            <Image src={imagePath} fluid/>
        </Link>
    </Container>
  )
}

export default LinkCard;
