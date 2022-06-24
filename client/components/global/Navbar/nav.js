import delve from 'dlv';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useState ,useEffect } from 'react';
import { getStrapiURL, handleRedirection } from "../../../utils";

const Nav = ({ links, locale, setShowMenu, showMenu, items }) => {
  const router = useRouter();
  const [showDrop, setShowDrop] = useState(false) 
  console.log('items', items);

  // getNav();


  // getNav();
    return (
      <nav className={router.asPath.startsWith("/case-studies") ? "nav__nav  current-case ": "nav__nav"} >
        {Object.values(items).map((link, index) => {
          return ( 



              <div className={`nav__item ${link.hasChildren ? "parent" : ""}`}>
                  {link.url
                    ? <a href={ link.url } > { link.customLabel } </a>
                    : <a href={'/' + link.pageUrl +  ''} > { link.label } </a>
                  }
                {/* <span class="nav__chevron nav__chevron__rotate"></span> */}
                
                <div class="nav__dropdown" className={`${link.hasChildren ? "nav__dropdown" : ""}`}>
                  <div class="indicator"></div>
                    {Object.values(link.subitems).map(item => {
                      return (
                        <a class="child" href={ item.pageUrl } > { item.label } </a>
                      );
                    })}
                </div>

              </div>

            // <>
            //   <Link
            //     href="/case-studies"
            //     key={`navigationLink-${index}`}
            //   >
            //   <a 
            //     className={router.asPath == `${delve(link, 'href')}?lang=${locale || 'en'}` ? "current parent main" : "parent main"} 
            //     key={`link-${index}`}
            //     >
            //     {delve(link, 'label')}
            //     <div 
            //       id={router.asPath.startsWith("/case-studies") ? "case-drop": ""}
            //       className={showDrop === true ? "reveal nav__dropdown" : "nav__dropdown"}>
            //       <div className='indicator'></div>
            //       {links.map((link, index) => {
            //           if (delve(link, 'isChild')) {
            //             return (
            //               <Link
            //                 href={`${delve(link, 'href')}`}
            //                 key={`navigationLink-${index}`}
            //               >
            //                 <a 
            //                   className={router.asPath == `${delve(link, 'href')}?lang=${locale || 'en'}` ? "current child" : "child"} 
            //                   key={`link-${index}`}
            //                   onClick={() => setShowMenu(false)}
            //                 >
            //                   {delve(link, 'label')}
            //                 </a>
            //               </Link>
            //             )
            //           } 
            //       })}
            //     </div>
            //     {/* <span className='nav__chevron'></span> */}
            //   </a>
            //   </Link>
            //   {/* mobile */}
            //   <a 
            //     className={router.asPath == `${delve(link, 'href')}?lang=${locale || 'en'}` ? "current parent mob" : "parent mob"} 
            //     key={`link-${index}`}
            //     onClick={() => setShowDrop(!showDrop)}
            //     >
            //     {delve(link, 'label')}
            //     <div 
            //     id={router.asPath.startsWith("/case-studies") ? "case-drop": ""}
            //     className={showDrop === true ? "reveal nav__dropdown" : "nav__dropdown"}>
            //       <div className='indicator'></div>
            //       {links.map((link, index) => {
            //           if (delve(link, 'isChild')) {
            //             return (
            //               <Link
            //                 href={`${delve(link, 'href')}?lang=${locale || 'en'}`}
            //                 key={`navigationLink-${index}`}
            //               >
            //                 <a 
            //                   className={router.asPath == `${delve(link, 'href')}?lang=${locale || 'en'}` ? "current child" : "child"} 
            //                   key={`link-${index}`}
            //                   onClick={() => setShowMenu(false)}
            //                 >
            //                   {delve(link, 'label')}
            //                 </a>
            //               </Link>
            //             )
            //           } 
            //       })}
            //     </div>
            //     <span className={showDrop === true ? "nav__chevron nav__chevron__rotate" : "nav__chevron"}></span>
            //   </a>
            //   {/* end */}
            // </>
          );
        })}
      </nav>
    );
  };

export default Nav;
