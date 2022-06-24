import delve from 'dlv';
import Nav from './nav';
import Cta from './cta';
import LocalSwitch from './localSwitch';
import Logo from './logo'
import Logolight from './logo-light'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import { useRouter } from "next/router";
import LogoCopy from './logo-copy';
import { getStrapiURL, handleRedirection } from "../../../utils";

const Navigation = ({ navigation, pageData, hasChildren  }) => {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter();
  const [menuItem, setMenuItemNew] = useState('')
  const [menuItemClean, setMenuItemClean] = useState('')
  

 


  async function getNav() {
    
    const res = await fetch(
      getStrapiURL(
        `/global?populate[navigation][populate][headerMenu][populate]=*` 
      ) 
    ).then((response) => response.json())
    .then(item => {
       
        var count = -1;
        var pearentIndex = '';
        var cleanTheArray = [];
        console.log(item.data.attributes.navigation.headerMenu);
        Object.values(item.data.attributes.navigation.headerMenu).forEach(element => {
          count++;
          console.log('elm', element);
          console.log('log', element.case_study.data);
          console.log('cleanArrayBefoer', cleanTheArray);
          if(element.case_study.data && element.isChild !== true){
            cleanTheArray.push({ 
              pageUrl: element.case_study.data.attributes.slug, 
              label: element.case_study.data.attributes.title,
              newTab: element.newTab,
              hasChildren: element.hasChildren,
              isChild: element.isChild,
              url: element.customURL,
              subitems: [],
    
            });
          }else if(element.page.data && element.isChild !== true){
            cleanTheArray.push({ 
              pageUrl: element.page.data.attributes.slug, 
              label: element.page.data.attributes.title,
              newTab: element.newTab,
              hasChildren: element.hasChildren,
              isChild: element.isChild,
              url: element.customURL,
              subitems: [],
    
            });
          }else if(element.hasChildren === true && element.isChild !== true){
            pearentIndex = count
            cleanTheArray.push({ 
              pageUrl: '', 
              label: '',
              newTab: element.newTab,
              hasChildren: element.hasChildren,
              isChild: element.isChild,
              url: element.customURL,
              customLabel: element.label,
              subitems: [],
    
            });
          }else if(element.case_study.data && element.isChild === true){
            cleanTheArray[pearentIndex].subitems.push({ 
    
              pageUrl: cleanTheArray[pearentIndex].url + '/' + element.case_study.data.attributes.slug, 
              label: element.case_study.data.attributes.title,
              newTab: element.newTab,
              hasChildren: element.hasChildren,
              isChild: element.isChild,
              url: element.customURL,
    
            });
            }else if(element.page.data && element.isChild === true){
              cleanTheArray[pearentIndex].subitems.push({ 
    
                pageUrl: cleanTheArray[pearentIndex].url + '/' + element.page.data.attributes.slug, 
                label: element.page.data.attributes.title,
                newTab: element.newTab,
                hasChildren: element.hasChildren,
                isChild: element.isChild,
                url: element.customURL
    
              });
            }
        });
        console.log('cleanArray', cleanTheArray);
        setMenuItemNew(cleanTheArray)
        // return item.data.attributes.navigation.headerMenu;
    });

  }

  useEffect(()=>{
    getNav();
  }, [])

  console.log('menu items', menuItem);

  return (
    <header className="nav">
      <div className="container center sb">
        <Logo />
        <Logolight />
        <div className={showMenu === true ? "active default" : "desk default"}>
          <div className={showMenu === true ? "show" : "none"}>
            <LogoCopy 
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </div>
          {/* <div className="header-nav"> */}
            <Nav
              links={delve(navigation, 'headerMenu')}
              locale={delve(pageData, 'attributes.locale')}
              items={menuItem}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          {/* </div> */}
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
