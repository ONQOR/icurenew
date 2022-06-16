import delve from 'dlv';
import Nav from './nav';
import Cta from './cta';
import LocalSwitch from './localSwitch';
import Logo from './logo'
import Logolight from './logo-light'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import { useRouter } from "next/router";
import LogoCopy from './logo-copy';

const Navigation = ({ navigation, pageData, hasChildren  }) => {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter();

  return (
    <header className="nav">
      <div className="container center sb">
        <Logo />
        <Logolight />
        <div className={showMenu === true ? "filter" : "none"}>
        </div>
        <div className={showMenu === true ? "active default" : "desk default"}>
          <div className={showMenu === true ? "show" : "none"}>
            <LogoCopy />
          </div>
          <div>
            <Nav
              links={delve(navigation, 'links')}
              locale={delve(pageData, 'attributes.locale')}
            />
          </div>
          <div>
            {delve(navigation, 'rightButton') && (
              <div className="flex">
                <Cta
                  href={delve(navigation, 'rightButton.href')}
                  target={delve(navigation, 'rightButton.target')}
                  label={delve(navigation, 'rightButton.label')}
                />
              </div>
            )}
          </div>
        </div>
       
        {/* <FontAwesomeIcon
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
          className={router.asPath.startsWith("/case-studies") ? "nav__hamburger current-case ": "nav__hamburger"}
        /> */}
        <div 
          id={showMenu === true ? "open" : ""}
          className={router.asPath.startsWith("/case-studies") ? "nav__hamburger current-case ": "nav__hamburger"}
          onClick={() => setShowMenu(!showMenu)}
          >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

Navigation.defaultProps = {};

export default Navigation;
