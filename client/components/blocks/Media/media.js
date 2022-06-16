import Link from 'next/link';
import { getStrapiMedia } from '../../../utils';
import delve from 'dlv';

const Visual = ({ video, image }) => {
  if (video) {
    return (
            <video controls>
                <source src={getStrapiMedia(delve(image, "data.attributes.url"))} type="video/mp4"></source>
            </video> 
    );
  } else {
    return (
        <img
        src={getStrapiMedia(delve(image, "data.attributes.url"))}
        alt={delve(image, "data.attributes.alternativeText")}
        className="relative mx-auto shadow-lg rounded-lg w-auto"
      />
    );
  }
};

Visual.defaultProps = {};

export default Visual;
