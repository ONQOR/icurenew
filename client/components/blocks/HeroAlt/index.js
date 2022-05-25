import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const HeroAlt = ({ header, featuredText, text, images,imageo, image }) => {
  const titlee = delve(header, 'title');
  console.log("heloo");
   return (
    <section className="hero-alt">
    <div className="container sb">

      {/* left */}
      <div className="hero-alt__left">
        <span>Research Theme</span>
        <h1>Heading 1</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
        {/* left points */}
        <div className="hero-alt__left__points">
          <div>
            <span>start date</span>
            <h3>2019</h3>
          </div>

          <div>
            <span>start date</span>
            <h3>2019</h3>
          </div>

          <div>
            <span>start date</span>
            <h3>2019</h3>
          </div>

          <div>
            <span>start date</span>
            <h3>2019</h3>
          </div>

          <div>
            <span>start date</span>
            <h3>2019</h3>
          </div>

        </div>
        {/* left button */}
        <button>Visit website</button>
      </div>

      {/* right */}
      <div className="hero__right">
        <img
          src={getStrapiMedia(delve(image, "data.attributes.url"))}
        />
      </div>

    </div> 
    </section>
   )
};

HeroAlt.defaultProps = {};

export default HeroAlt;
