import delve from 'dlv';
import Link from 'next/link';

const Nav = ({ links, locale }) => {
  return (
    <nav className="nav__nav">
      {links.map((link, index) => ( 
        <Link
          href={`${delve(link, 'href')}?lang=${locale || 'en'}`}
          key={`navigationLink-${index}`}
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}
        >
          <a className="md:mr-10 hover:text-gray-900" key={`link-${index}`}>
            {delve(link, 'label')}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
