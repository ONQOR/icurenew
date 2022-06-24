import delve from 'dlv';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useState } from 'react'


const Nav = ({ links, locale }) => {
  const router = useRouter();
  const [showDrop, setShowDrop] = useState(false)  
  console.log('links',links);

  return (
    <nav className="footer__nav">
       {Object.values(links).map((link, index) => {

          return ( 
            <a href={link.pageUrl}   >{ link.label }</a>
          );

        })}
    </nav>
  );
};

export default Nav;
