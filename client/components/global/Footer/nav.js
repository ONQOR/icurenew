import delve from 'dlv';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useState } from 'react'

const Nav = ({ links, locale }) => {
  const router = useRouter();
  const [showDrop, setShowDrop] = useState(false)  

  return (
    <nav className="footer__nav">
       {links.map((link, index) => {
            if (delve(link, 'hasChildren')) {
              return ( 
                  <a 
                    className={router.asPath == `${delve(link, 'href')}?lang=${locale || 'en'}` ? "current parent" : "parent"} 
                    key={`link-${index}`}
                    onClick={() => setShowDrop(!showDrop)}
                    >
                    {delve(link, 'label')}
                    <div className={showDrop === true ? "reveal nav__dropdown" : "nav__dropdown"}>
                      {links.map((link, index) => {
                          if (delve(link, 'isChild')) {
                            return (
                              <Link
                                href={`${delve(link, 'href')}?lang=${locale || 'en'}`}
                                key={`navigationLink-${index}`}
                              >
                                <a 
                                  className={router.asPath == `${delve(link, 'href')}?lang=${locale || 'en'}` ? "current child" : "child"} 
                                  key={`link-${index}`}
                                  target="_blank"
                                >
                                  {delve(link, 'label')}
                                </a>
                              </Link>
                            )
                          } 
                      })}
                    </div>
                    <span className='nav__chevron'></span>
                  </a>
              )
            } else if (delve(link, 'isChild')) {
              return (
                <></>
              );
            } else {
              return (
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
              );
            }
        })}
    </nav>
  );
};

export default Nav;
