import delve from 'dlv';
import { getStrapiMedia } from '../../../utils'; 
import Nav from './nav';
import Columns from './columns'; 
import Logonew from './logo-new';
import Socials from './socials';
import LogoDark from './logo-dark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Footer = ({ pageData, navigation, footer, caption, text}) => {  

  return (
			<footer className="footer">	 
        <div className="footer__container">
          {/* global col 1 */}
          <div className="footer__news">
              <Logonew />
							<p>{caption}</p>
              <p>{text}</p>
              <label>Email Address</label>
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
              <Socials />
              <div>
                <FontAwesomeIcon
                  icon={faTwitter}
                />
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                <p>twitter</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                />
                <p>linkedin</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faFacebookF}
                />
                <p>facebook</p>
              </div>
            </ul>
					</div>
        </div>
          {/* terms */}
          <div className="footer__terms">
              <div className="container sb">
                <p className="footer__terms__date">© iCURe 2022</p>
                <p className="footer__terms__terms"><a href="<?php echo get_field('terms', 'option'); ?>" target="blank">Terms of Service</a></p>
              </div>
            </div>
          {/* onqor */}
            <div className="footer__onqor">
              <div className="container sb">
                <p>Site Designed &amp; Built By <a href="https://onqor.co.uk" target="_blank">ONQOR Ltd.</a></p>	
              </div>
            </div>
			</footer>
  );
};

Footer.defaultProps = {};

export default Footer;
