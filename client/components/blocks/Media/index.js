import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Media = ({ image, title, subTitle }) => {

  return (
    <section className="media">
        <div className="container center">
            <span>{subTitle}</span>
            <h2>{title}</h2>
            <img
              src={getStrapiMedia(delve(image, "data.attributes.url"))}
              alt={delve(image, "data.attributes.alternativeText")}
              className="relative mx-auto shadow-lg rounded-lg w-auto"
            />
        </div>
    </section>
  );
};

Media.defaultProps = {};

export default Media;
