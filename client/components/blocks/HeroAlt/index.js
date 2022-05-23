import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const HeroAlt = ({ header }) => {
  const titlee = delve(header, 'title');
  console.log("heloo");
   return (
    <section className="hero-alt">
    <div className="container sb">

    </div> 
  </section>
   )
};

HeroAlt.defaultProps = {};

export default HeroAlt;
