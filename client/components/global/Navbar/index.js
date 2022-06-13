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

const Navigation = ({ navigation, pageData, hasChildren  }) => {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter();

  return (
    <header className="nav">
      <div className="container center">
        <Logo />
        <Logolight />
        <div className={showMenu === true ? "active default" : "desk default"}>
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
       
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
          className='nav__hamburger'
        />
      </div>
    </header>
  );
};

Navigation.defaultProps = {};

export default Navigation;
