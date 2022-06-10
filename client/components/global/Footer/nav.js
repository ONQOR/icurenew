import delve from 'dlv';
import Link from 'next/link';
import { useRouter } from "next/router";

const Nav = ({ links, locale }) => {
  const router = useRouter();

  return (
    <nav className="footer__nav">
      {links.map((link, index) => (
        <Link
          href={`${delve(link, 'href')}?lang=${locale || 'en'}`}
          key={`navigationLink-${index}`}
        >
          <a 
            className={router.pathname == "/" ? "active" : ""} 
            key={`link-${index}`}>
            {delve(link, 'label')}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
