import delve from 'dlv';
import { getStrapiMedia } from '../../../utils'; 
import Nav from './nav';
import Columns from './columns'; 
import Logonew from './logo-new';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import Twitter from './socials/twitter';
import Facebook from './socials/facebook';
import Linkedin from './socials/linkedin';
import Onqor from './onqor';
import { getStrapiURL, handleRedirection } from "../../../utils";

const Footer = ({ pageData, navigation, footer, caption, text, twitter, facebook, linkedin}) => {  
  var currentYear = new Date().getFullYear();  
  const [pageItem, setPageItem] = useState('');
  const [showCase, setShowCase] = useState('');
  async function getNav() {
    
    const res = await fetch(
      getStrapiURL(
        `/global?populate[footer][populate][FooterLinks][populate]=*` 
      ) 
    ).then((response) => response.json())
    .then(item => {
       
        var count = -1;
        var pearentIndex = '';
        var siteMap = [];
        var showCaseAry = [];
        console.log('footer', item.data.attributes.footer);
        if(item.data.attributes.footer.FooterLinks){
          Object.values(item.data.attributes.footer.FooterLinks).forEach(element => {

            if(element.case_study.data){
              siteMap.push({ 
                pageUrl: '/case-studies/' + element.case_study.data.attributes.slug, 
                label: element.case_study.data.attributes.title,
              });
            }if(element.page.data){
              siteMap.push({ 
                pageUrl: '/' + element.page.data.attributes.slug, 
                label: element.page.data.attributes.title,    
              });
            }else if( element.href ){
              siteMap.push({ 
                pageUrl: element.href, 
                label: element.label,    
              });
            }
          });
        }

        // console.log('cleanArray', cleanTheArray);
        setPageItem(siteMap);
        
    });

    const resShowCase = await fetch(
      getStrapiURL(
        `/global?populate[footer][populate][showCase][populate]=*` 
      ) 
    ).then((response) => response.json())
    .then(item => {
       
        var count = -1;
        var pearentIndex = '';
        var siteMap = [];
        var showCaseAry = [];
        console.log('footer', item.data.attributes.footer);
        if(item.data.attributes.footer.showCase){
          Object.values(item.data.attributes.footer.showCase).forEach(element => {
      
            if(element.case_study.data){
              showCaseAry.push({ 
                pageUrl: '/case-studies/' + element.case_study.data.attributes.slug, 
                label: element.case_study.data.attributes.title,
              });
            }if(element.page.data){
              showCaseAry.push({ 
                pageUrl: '/' + element.page.data.attributes.slug, 
                label: element.page.data.attributes.title,    
              });
            }else if( element.href ){
              showCaseAry.push({ 
                pageUrl: element.href, 
                label: element.label,    
              });
            }
          });
        }
        // console.log('cleanArray', cleanTheArray);
        
        setShowCase(showCaseAry);
    });

  }

  useEffect(()=>{
    getNav();
  }, [])
  return (
    <>
			<footer className="footer">	 
        <div className="footer__container">
          {/* global col 1 */}
          <div className="footer__news">
              <Logonew />
							<p>{caption}</p>
              <p>{text}</p>
              <div>
                <input type="email" placeholder="email"/>
                <input type="submit" value="Sign Up"/>
              </div>
					</div>
          {/* nav col 2 */}
          <div  className="footer__nav">
            <h4>Sitemap</h4>
              <Nav
                links={pageItem}
              />
					</div>
          {/* showcases col 3 */}
					<div className="footer__showcases">
            <h4>Showcases</h4>
           
              <Nav
                links={showCase}
              />

					</div>
          {/* showcases col 4 */}
          <div className="footer__socials">
            <h4>Social</h4>
            <ul className="menu_footer_socials">
              <Twitter twitter={twitter}/>
              <Linkedin linkedin={linkedin}/>
              <Facebook facebook={facebook}/>
            </ul>
					</div>
        </div>
          {/* terms */}
          <div className="footer__terms">
              <div className="container sb">
                <p className="footer__terms__date">© ICURe {currentYear}</p>
                <p className="footer__terms__terms">
                  <Link href="/privacy" passHref={true}>
                    <a target="_blank">Terms of Service</a>
                  </Link>
                </p>
              </div>
            </div>
          {/* onqor */}
            <div className="footer__onqor">
              <div className="container">
                <p>Site Designed &amp; Built By Site Designed &amp; Built by</p><a href="https://onqor.co.uk" target="_blank"><Onqor /></a>
              </div>
            </div>
			</footer>
      </>
  );
};

Footer.defaultProps = {};

export default Footer;
