import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Points = ({ title, text, caption, cards }) => {

  return (
    <section className="points">
      <div className="container sb">
        <div className="points__title">
            <span className='caption'>{caption}</span>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>

        {/* col */}
        {cards &&
        cards.map((item, index) => (
              <div className="points__item" key={`feature-${index}`}>
                  <img
                    src={getStrapiMedia(delve(item, "image.data.attributes.url"))}
                    alt={delve(item, "image.data.attributes.alternativeText")}
                  />
                 <h4>{delve(item, "title")}</h4>
                 <p>{delve(item, "text")}</p>
             </div>
        ))}

      </div> 
    </section>
  );
};

Points.defaultProps = {};

export default Points;
