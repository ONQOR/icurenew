import delve from 'dlv';

const Footer = ({ tagline, text, label, btnText }) => {
  return (
			<footer className="footer">	 
        <div className="footer__container">
          {/* news col 1 */}
          <div className="footer__news">
							<p>	Subscribe to ICURe Newsletter</p>
              <p>Sign up to our newsletter to stay updated with everything ICURe related!</p>
              <label>Email Address</label>
              <div>
                <input type="email" placeholder="email"/>
                <input type="submit" value="Sign Up"/>
              </div>
					</div>
          {/* nav col 2 */}
          <div  className="footer__nav">
            <h4>Sitemap</h4>
						<ul id="menu_footer_showcases">
              <li>hello </li>
              <li>hello </li>
              <li>hello </li>
            </ul>
					</div>
          {/* showcases col 3 */}
					<div className="footer__showcases">
            <h4>Showcases</h4>
            <ul className="menu_footer_showcases">
              <li>hello </li>
              <li>hello </li>
              <li>hello </li>
            </ul>
					</div>
          {/* showcases col 4 */}
          <div className="footer__showcases">
            <h4>Socials</h4>
            <ul className="menu_footer_showcases">
              <li>hello </li>
              <li>hello </li>
              <li>hello </li>
            </ul>
					</div>
        </div>
          {/* terms */}
          <div className="footer__terms">
              <div className="container sb">
                <p className="footer__terms__date">© ImpactFlow 2022</p>
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
