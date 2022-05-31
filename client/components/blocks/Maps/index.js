import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLoadScript } from '@react-google-maps/api';
import { useState, useMemo, useCallback, useRef } from "react";
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer,
} from "@react-google-maps/api";

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

  const center = useMemo(() => ({lat: 43, lng: -80}), [])

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

      <div className="maps__container">
      {/* map start  */}
        <div className="map">
          <GoogleMap
            zoom={10}
            center={center}
            mapContainerClassName="map-container"
          >
          {/* user box start */}
          <div></div>
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
          </GoogleMap>
        </div>
      {/* map end */}
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
