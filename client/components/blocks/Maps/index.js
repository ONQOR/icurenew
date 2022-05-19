import delve from 'dlv';
import { useState } from 'react';
import { getStrapiMedia } from '../../../utils';

const Maps = ({ image, caption, value, text, subTitle, title }) => {

const [toggleState, setToggle] = useState(1)
const handleClick = (index) => {
  setToggle(index)
  console.log(index)
}

  return (
    <section className="maps">
      <div className="maps__container__title container center">
        <span>{subTitle}</span>
        <h2>{title}</h2>
      </div>
      <div className="maps__container">
        <div className="container">
          <div className="maps__box">   
            {/* name */}
              <div className="maps__box__boxbox">
                <img
                  src={getStrapiMedia(delve(image, "data.attributes.url"))}
                  alt={delve(image, "data.attributes.alternativeText")}
                  className="maps__box__boxbox__circle"
                />
                <div className="maps__box__boxbox__text">
                  <h3>{caption}</h3>
                  <span>{value}</span>
                </div>
              </div>
            {/* text */}
            <p>{text}</p>
            
          </div>
        </div> 
      </div>
      
    </section>
  ); 
};

Maps.defaultProps = {};

export default Maps;            
