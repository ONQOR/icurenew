import delve from 'dlv';
import { useState } from 'react';
import { getStrapiMedia } from '../../../utils';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLoadScript } from '@react-google-maps/api';
import Map from "./maps";

const Maps = ({ image, caption, value, text, subTitle, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    loop: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'clients__slider'
  };

  const { isLoaded } = useLoadScript ({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) 
  return <div>Loading...</div>;
  return (
    <section className="maps">
      {/* title start */}
      <div className="maps__container__title container center">
        <span>{subTitle}</span>
        <h2>{title}</h2>
      </div>
      {/* title end */}

      {/* map start  */}
        <Map />
      {/* map end */}

      <div className="maps__container">
        <div className="container">
          {/* user box start */}
          <div className="maps__box">   
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
            <p>{text}</p>
            <button>Visible Website</button>
          </div>
          {/* user box end */}
        </div> 
      </div>

      {/* slider start */}
      <div className='clients'>
        <div className="container center">
          <Slider {...settings}>
            <img />
            <img />
            <img />
            <img />
            <img />
          </Slider>
        </div> 
      </div>
      {/* slider end */}
    </section>
  ); 
};

Maps.defaultProps = {};

export default Maps;            
