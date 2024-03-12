import NavBar from '../components/nav/Navbar';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
        <NavBar/>
      <div className="background-image">
        <div className="text-on-image principal">
            Bienvenue a Camp'INSA
        <div className='text-on-image secondary'>
            En savoir plus
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;