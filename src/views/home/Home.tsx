import NavBar from "../../components/nav/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="first-container fullscreen-container">
        <div className="text-on-image principal">
          Bienvenue a Camp'INSA
          <div className="text-on-image secondary">En savoir plus</div>
        </div>
      </div>
    </>
  );
};

export default Home;
