import NavBar from "../components/nav/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="first-container">
        <div className="text-on-image principal">
          Bienvenue a Camp'INSA
          <div className="text-on-image secondary">En savoir plus</div>
        </div>
      </div>
      <div className="second-container"></div>
    </div>
  );
};

export default Home;
