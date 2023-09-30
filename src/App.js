import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Error, ShotgunList } from './views';
import { MaybeNav, PackAnim } from './components';
import ouais from "./assets/images/ouais.png";
import fr from "./assets/images/fr.png";

function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <Routes>
            <Route path='/' exact element={<MaybeNav><Home /></MaybeNav>} />
            <Route path='/shotguns' exact element={<MaybeNav><ShotgunList /></MaybeNav>} />
            <Route path='/pack' exact element={<PackAnim
              id={0}
              firstname="Axel"
              lastname="Lenroué"
              surname="Axel"
              score={69}
              image={ouais}
              poste={"USB"}
              pays={fr}
            />} />
            <Route path="*" element={<MaybeNav><Error title="404" subtitle="Page introuvable 🕵🏻‍♀️" /></MaybeNav>} />
          </Routes>
        </Router>
      </div>

    </>
  );
}

export default App;
