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

const Maps = ({ image, caption, value, text, subTitle, title, cards }) => {
  // slider js
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    loop: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'clients__slider'
  };

  // map js
  const center = useMemo(() => ({lat: 43, lng: -80}), [])
  const { isLoaded } = useLoadScript ({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  // map location onclick slider content onclick
  const [mapState, setMap] = useState({lat: 43, lng: -80})
  const [slideState, setSlide] = useState(1)
  const mapClick = (location, count) => {
    setMap(location)
    setSlide(count)
    console.log(mapState)
    console.log(slideState)
  }


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
            center={mapState}
            mapContainerClassName="map-container"
          >
            {/* user box start */}
            {cards &&
              cards.map((item, index) => (
                <div className={slideState === index + 1 ? "active maps__box" : "maps__box"}>   
                  <div className="maps__box__boxbox">
                    <img
                        src={getStrapiMedia(delve(item, "image.data.attributes.url"))}
                        alt={delve(item, "image.data.attributes.alternativeText")}
                        className="maps__box__boxbox__circle"
                    />
                    <div className="maps__box__boxbox__text">
                      <h3>{delve(item, "boxName")}</h3>
                      <span>{delve(item, "boxCaption")}</span>
                    </div>
                  </div>
                  <p>{delve(item, "boxText")}</p>
                  <button src={delve(item, "btnUrl")}>{delve(item, "btnText")}</button>
                </div>
            ))}
            {/* user box end */}
          </GoogleMap>
        </div>
      {/* map end */}
      </div> 

      {/* slider start */}
      <div className='clients'>
        <div className="container center">
          <Slider {...settings}>
            {cards &&
              cards.map((item, index) => (
                <img 
                  onClick={() => mapClick({lat: delve(item, "lat"), lng: delve(item, "lng")}, index + 1)} 
                  key={`client-${index}`}
                  src={getStrapiMedia(delve(item, "image.data.attributes.url"))}
                  alt={delve(item, "image.data.attributes.alternativeText")}
                  className={mapState === index + 1 ? "active" : ""}
                  
                />
            ))}
          </Slider>
        </div> 
      </div>
      {/* slider end */}
    </section>
  ); 
};

Maps.defaultProps = {};

export default Maps;            
