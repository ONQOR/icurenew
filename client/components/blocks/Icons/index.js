import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Icons = ({ cards, title, text }) => {

  return (
    <section className="icons">
      <div className="container sb center">
        <div className="icons__title">
          <span className='caption'>{title}</span>
          <h2>{text}</h2>
        </div>
        {cards &&
        cards.map((item, index) => (
          <div  className="tabs-alt__icon">
            <img
              src={getStrapiMedia(delve(item, "image.data.attributes.url"))}
              alt={delve(item, "image.data.attributes.alternativeText")}
            />
            <h3>{delve(item, "title")}</h3>
            <p>{delve(item, "text")}</p>
          </div>
        ))}

      </div> 
    </section>
  );
};

Icons.defaultProps = {};

export default Icons;
