import { Container } from "react-bootstrap";
import NavBar from "../../components/nav/Navbar";
import "./Error.css";
import Footer from "../../components/nav/Footer";

interface ErrorProps {
  title: string,
  subtitle: string
}

export default function Error({ title, subtitle }: ErrorProps) {
  return <>
    <NavBar />
    <Container className="fullscreen-container error-container">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </Container>
    <Footer />
  </>
}