import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Shape from '../../shared/shape'

const HeroAlt = ({ image, cards, title, text, caption, btnUrl, btnText }) => {
   return (
    <section className="hero-alt">
    <div className="container sb">

      {/* left */}
      <div className="hero-alt__left">
        <span>{caption}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        {/* left points */}
        <div className="hero-alt__left__points">
        {cards &&
        cards.map((item, index) => (
          <div key={`feature-${index}`}>
            <span>{delve(item, "title")}</span>
            <h3>{delve(item, "text")}</h3>
          </div>
        ))}

        </div>
        {/* left button */}
          <Link href={btnUrl} passHref={true}>
              <a>
                <button>
                  {btnText}
                  <FontAwesomeIcon 
                    icon={faArrowUpRightFromSquare} 
                    className="arrow-square"  
                  />
                </button> 
              </a>
          </Link>
      </div>

      {/* right */}
      <div className="hero-alt__right">
        <img
          src={getStrapiMedia(delve(image, "data.attributes.url"))}
        />
        <Shape />
      </div>

    </div> 
    </section>
   )
};

HeroAlt.defaultProps = {};

export default HeroAlt;
