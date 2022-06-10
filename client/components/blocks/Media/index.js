import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import Visual from "./media"

const Media = ({ image, title, subTitle, video }) => {

  return (
    <section className="media">
        <div className="container center">
            <span>{subTitle}</span>
            <h2>{title}</h2>
            <Visual image={image} video={video}/>
        </div>
    </section>
  );
};

Media.defaultProps = {};

export default Media;
