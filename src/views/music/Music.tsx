import { Image } from "react-bootstrap";
import NavBar from "../../components/nav/Navbar";
import Footer from "../../components/nav/Footer";
import "./Music.css";
import cover from "../../assets/images/music/cover.png";

export default function Music() {

  return <>
    <NavBar />
    <div className="fullscreen-container music">
      <div>
        <Image className="music-cover" src={cover} fluid />
      </div>
      <div className="link-container">
        <h1>Disponible partout</h1>
        <ul>
          <li>
            <iframe style={{ "borderRadius": "12px" }} src="https://open.spotify.com/embed/track/7dsplAGWoy1uwm5XEFRNDE?utm_source=generator" width="100%" height="152" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </li>
          <li>
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/2531502391?tracklist=false&radius=true" width="100%" height="152" allowTransparency allow="encrypted-media; clipboard-write"></iframe>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </>
}