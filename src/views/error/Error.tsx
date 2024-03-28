import NavBar from "../../components/nav/Navbar";
import "./Error.css";
import AmongUs from "../../components/Anim/Amongus";

interface ErrorProps {
  title: string,
  subtitle: string
}

export default function Error({ title, subtitle }: ErrorProps) {
  return <>
    <NavBar />
    <AmongUs />
    <div className="fullscreen-container error-container">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  </>
}