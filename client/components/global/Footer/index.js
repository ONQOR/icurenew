import delve from 'dlv';
import { getStrapiMedia } from '../../../utils'; 
import Nav from './nav';
import Columns from './columns'; 
import Logonew from './logo-new';
import Link from 'next/link';
import Twitter from './socials/twitter';
import Facebook from './socials/facebook';
import Linkedin from './socials/linkedin';
import Onqor from './onqor';

const Footer = ({ pageData, navigation, footer, caption, text, twitter, facebook, linkedin}) => {  
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
                links={delve(navigation, 'links')}
                locale={delve(pageData, 'attributes.locale')}
              />
					</div>
          {/* showcases col 3 */}
					<div className="footer__showcases">
            <h4>Showcases</h4>
            <ul className="menu_footer_showcases">
            <Columns
              columns={delve(footer, 'footerColumns')}
              locale={delve(pageData, 'attributes.locale')}
            />
            </ul>
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
                <p className="footer__terms__date">© iCURe 2022</p>
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
