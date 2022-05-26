import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Features = ({ cards, title, image }) => {

  cards.forEach(element => {
    console.log('elm', element);
  });

  return (
    <div className="features">
      <div className="container sb">
        <h2>{title}</h2>

        {cards &&
        cards.map((item, index) => (
          <div className="features__item" key={`feature-${index}`}>
              <img
                src={getStrapiMedia(delve(item, "image.data.attributes.url"))}
                alt={delve(item, "image.data.attributes.alternativeText")}
              />
              <h4>{delve(item, "title")}</h4>
              <p>{delve(item, "text")}</p>
          </div>
        ))}


      </div>
    </div>
  );
};

Features.defaultProps = {};

export default Features;
