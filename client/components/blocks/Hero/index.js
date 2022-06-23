import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'

const Hero = ({ header, text, featuredText, images, image, cards, hide}) => {
  const title = delve(header, 'title');

   return (
    <section className={hide ? "hide" : "hero"}>
    <div className="container sb">

      {/* left */}
      <div className="hero__left">
        <h1>{title}</h1>
        <p><ReactMarkdown>{text}</ReactMarkdown></p>
        <span>{featuredText}</span>
        <img
          src={getStrapiMedia(delve(images, "data.attributes.url"))}
          className="featured"
        />
        <div className="hero__left__box">
          
        {cards &&
        cards.map((item, index) => (
              <div className="hero__left__box__boxbox" key={`feature-${index}`}>
                <img
                  src={getStrapiMedia(delve(item, "image.data.attributes.url"))}
                  alt={delve(item, "image.data.attributes.alternativeText")}
                />
                <div className="hero__left__box__boxbox__text">
                  <span>{delve(item, "title")}</span>
                  <h3>{delve(item, "text")}</h3>
                </div>
              </div>
        ))}

        </div>

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

Hero.defaultProps = {};

export default Hero;
