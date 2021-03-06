import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import Visual from "./media"

const Media = ({ image, images, title, subTitle, video, hide }) => {

  return (
    <section className={hide ? "hide" : "media"}>
        <div className="container center">
            <span className='caption'>{subTitle}</span>
            <h2>{title}</h2>
            <Visual image={image} video={video} images={images}/>
        </div>
    </section>
  );
};

Media.defaultProps = {};

export default Media;
