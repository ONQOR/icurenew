import delve from 'dlv';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useState } from 'react';

const Nav = ({ links, locale, setShowMenu, showMenu }) => {
  const router = useRouter();
  const [showDrop, setShowDrop] = useState(false)  

    return (
      <nav className={router.asPath.startsWith("/case-studies") ? "nav__nav current-case ": "nav__nav"} >
        {links.map((link, index) => {
            if (delve(link, 'hasChildren')) {
              return ( 
                <>
                  <a 
                    className={router.asPath == `${delve(link, 'href')}?lang=${locale || 'en'}` ? "current parent main" : "parent main"} 
                    key={`link-${index}`}
                    >
                    {delve(link, 'label')}
                    <div className={showDrop === true ? "reveal nav__dropdown" : "nav__dropdown"}>
                      <div className='indicator'></div>
                      {links.map((link, index) => {
                          if (delve(link, 'isChild')) {
                            return (
                              <Link
                                href={`${delve(link, 'href')}`}
                                key={`navigationLink-${index}`}
                              >
                                <a 
                                  className={router.asPath == `${delve(link, 'href')}?lang=${locale || 'en'}` ? "current child" : "child"} 
                                  key={`link-${index}`}
                                  onClick={() => setShowMenu(false)}
                                >
                                  {delve(link, 'label')}
                                </a>
                              </Link>
                            )
                          } 
                      })}
                    </div>
                    {/* <span className='nav__chevron'></span> */}
                  </a>
                  {/* mobile */}
                  <a 
                    className={router.asPath == `${delve(link, 'href')}?lang=${locale || 'en'}` ? "current parent mob" : "parent mob"} 
                    key={`link-${index}`}
                    onClick={() => setShowDrop(!showDrop)}
                    >
                    {delve(link, 'label')}
                    <div className={showDrop === true ? "reveal nav__dropdown" : "nav__dropdown"}>
                      <div className='indicator'></div>
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
                                  onClick={() => setShowMenu(false)}
                                >
                                  {delve(link, 'label')}
                                </a>
                              </Link>
                            )
                          } 
                      })}
                    </div>
                    <span className={showDrop === true ? "nav__chevron nav__chevron__rotate" : "nav__chevron"}></span>
                  </a>
                  {/* end */}
                </>
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
                    key={`link-${index}`}
                    onClick={() => setShowMenu(false)}
                    >
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
