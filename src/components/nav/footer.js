import { Link } from "react-router-dom";
import logo from '../../assets/images/logo/logo.png';
import "./footer.scss";

const Footer = () => {

  return (
    <footer id="global-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to='/' className='navbar-title'>
            <img src={logo} alt="Tor'Khan logo" className='navbar-logo' />
            TOR'KHAN
          </Link>
          <div className="footer-socials">
            <div className="footer-socials-icons">
              <Link to={"/discord"}><i className="fa-brands fa-discord"></i></Link>
              <Link to={"/instagram"}><i className="fa-brands fa-instagram"></i></Link>
              {/* <Link to={"/youtube"}><i className="fa-brands fa-youtube"></i></Link> */}
              <Link to={"/twitter"}><i className="fa-brands fa-twitter"></i></Link>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <h4>Company</h4>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/support"}>Support</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
          <ul>
            <h4>Community</h4>
            <li><Link to={"/news"}>News</Link></li>
            <li><Link to={"/wiki"}>Wiki</Link></li>
          </ul>
        </div>
      </div>
      <footer>

        <div className="copyright">
          <span>© Tor'Khan. All rights reserved.</span>
        </div>
      </footer>
    </footer>
  )

};

export default Footer;