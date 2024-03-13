import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./LinkCard.css";

interface Props {
  imagePath: string;
  text: string;
  to: string;
}

const LinkCard = ({ imagePath, text, to }: Props) => {
  return (
    <div className="team-container overflow-hidden">
      <article>
        <div className="card border-0 bg-transparent">
          <figure className="card-img-top mb-4 overflow-hidden bsb-overlay-hover">
            <Link to={to}>
              <Image
                className="img-fluid bsb-scale bsb-hover-scale-up"
                loading="lazy"
                src={imagePath}
                rounded
              />
            </Link>
          </figure>
          <div className="card-body m-0 p-0">
            <div className="entry-header mb-3">
              <h2 className="card-title entry-title h4 m-0">
                <Link className="text-decoration-none" to={to}>
                  <p className="link-dark">{text}</p>
                </Link>
                <hr className="w-50 border-dark-subtle" />
              </h2>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default LinkCard;
