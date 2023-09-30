import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const [click, setClick] = useState(false);
  const [mobile, setMobile] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);

  const refreshMobile = (e) => {
    setMobile(window.innerWidth <= 960);
    if (e) e.stopPropagation();
  };

  useEffect(() => {
    refreshMobile();
  }, []);

  window.addEventListener('resize', refreshMobile);

  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-title' onClick={closeMobileMenu}>
            OUI?
          </Link>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links nav-links-hover' onClick={closeMobileMenu}>
                Accueil
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/planning'
                className='nav-links nav-links-hover'
                onClick={closeMobileMenu}
              >
                Planning
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/shotguns'
                className='nav-links nav-links-hover'
                onClick={closeMobileMenu}
              >
                Shotguns
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/membres'
                className='nav-links nav-links-hover'
                onClick={closeMobileMenu}
              >
                Nos Membres
              </Link>
            </li>
            {mobile && <li className='nav-item'><Link className="nav-links nav-btn" to='/taxi'>ALLO TAXI</Link></li>}
          </ul>
          {mobile && <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;