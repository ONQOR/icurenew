import Link from 'next/link';
import { getStrapiMedia } from '../../../utils';
import delve from 'dlv';
import { useRouter } from "next/router";

const CustomLink = ({ label, href, locale, target, isExternal }) => {
  const router = useRouter();
  if (isExternal) {
    return (
      <Link href={href}>
        <a className={router.asPath.startsWith("/case-studies") ? "current button": "button"} target={target}>{label}</a>
      </Link>
    );
  } else {
    return (
      <Link href={`${href}?lang=${locale || 'en'}`}>
        <a className={router.asPath.startsWith("/case-studies") ? "current button": "button"} target={target}>{label}
        </a>
      </Link>
    );
  }
};

CustomLink.defaultProps = {};

export default CustomLink;
