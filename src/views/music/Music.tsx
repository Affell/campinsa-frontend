import { Image } from "react-bootstrap";
import NavBar from "../../components/nav/Navbar";
import Footer from "../../components/nav/Footer";
import "./Music.css";
import cover from "../../assets/images/music/cover.png";

export default function Music() {
  return <>
    <NavBar />
    <div className="fullscreen-container">
      <div className="music">
        <div>
          <Image className="music-cover" src={cover} fluid />
        </div>
        <div className="link-container">
          <h1>Disponible partout</h1>
          <ul>
            <li>
              <iframe style={{ "borderRadius": "12px" }} src="https://open.spotify.com/embed/track/6cKIWsvVScoblaLy9PwSow?utm_source=generator" width="100%" height="152" allowFullScreen allow="autoplay; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </li>
            <li>
              <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/2749256501?tracklist=false&radius=true" width="100%" height="158" allowTransparency allow="encrypted-media"></iframe>
            </li>
            <li>
              <iframe allow="encrypted-media *; fullscreen *; clipboard-write" height="190" style={{ "width": "100%", "overflow": "hidden", "borderRadius": "10px" }} sandbox="allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/fr/album/sommet/1715328390?i=1715328392"></iframe>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <h6 className="quote">Single écrit et produit par Fabien AKA "Le F", Rémi, Antoine, Georges, Maël et Maxence</h6>
    <h6 className="quote">Remerciements à Bastien pour la prod, Quentin pour l’enregistrement et Tibe pour le mix</h6>
    <Footer />
  </>
}