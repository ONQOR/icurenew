import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Icons = ({ cards, title, caption, hide }) => {

  return (
    <section className={hide ? "hide" : "icons"}>
      <div className="container sb center">
        <div className="icons__title">
          <span className='caption'>{caption}</span>
          <h2>{title}</h2>
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
