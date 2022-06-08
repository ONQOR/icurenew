import delve from 'dlv';
import Link from 'next/link';
import { useRouter } from "next/router";

const Nav = ({ links, locale }) => {
  const router = useRouter();
  console.log(router)
  return (
    <nav className={router.asPath.startsWith("/blog") ? "nav__nav current-case ": "nav__nav"} >
      {links.map((link, index) => ( 
        <Link
          href={`${delve(link, 'href')}?lang=${locale || 'en'}`}
          key={`navigationLink-${index}`}
        >
          <a 
            className={router.asPath == `${delve(link, 'href')}?lang=${locale || 'en'}` ? "current" : ""} 
            key={`link-${index}`}>
            {delve(link, 'label')}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
