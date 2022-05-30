import Link from 'next/link';
import { getStrapiMedia } from '../../../utils';
import delve from 'dlv';

const CustomLink = ({ label, href, locale, target, isExternal, image }) => {
  if (isExternal) {
    return (
      <Link href={href}>
        <a target={target}>{label}</a>
      </Link>
    );
  } else {
    return (
      <Link href={`${href}?lang=${locale || 'en'}`}>
        <a target={target}>{label}
          <img
            src={getStrapiMedia(delve(image, "image.data.attributes.url"))}
            alt={delve(image, "image.data.attributes.alternativeText")}
          />
        </a>
      </Link>
    );
  }
};

CustomLink.defaultProps = {};

export default CustomLink;
