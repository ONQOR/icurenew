import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLoadScript } from '@react-google-maps/api';
import Link from 'next/link';
import { useState, useMemo, useCallback, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
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
    className: 'clients__slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
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
              cards.map((item, index) => {
                return (
                  <div className={slideState === index + 1 ? "active maps__box desk" : "maps__box desk not-active"}>   
                  <div className="maps__box__boxbox">
                    <img
                        src={getStrapiMedia(delve(item, "uploadsUrl"))}
                        className="maps__box__boxbox__circle"
                    />
                    <div className="maps__box__boxbox__text">
                      <h3>{delve(item, "boxName")}</h3>
                      <span>{delve(item, "boxCaption")}</span>
                    </div>
                  </div>
                  <p>{delve(item, "boxText")}</p>
                  <Link href={`${delve(item, 'btnUrl')}`} passHref={true}>
                    <a>
                      <button>
                        {delve(item, "btnText")}
                        <FontAwesomeIcon 
                          icon={faArrowUpRightFromSquare} 
                          className="arrow-square"  
                        />
                      </button> 
                    </a>
                  </Link>
                </div>
                )
              })}
            {/* user box end */}
          </GoogleMap>
          {/* user box start */}
            {cards &&
              cards.map((item, index) => (
                <div className={slideState === index + 1 ? "active maps__box mob" : "maps__box mob not-active"}>   
                  <div className="maps__box__boxbox">
                    <img
                        src={getStrapiMedia(delve(item, "images.data.attributes.url"))}
                        alt={delve(item, "images.data.attributes.alternativeText")}
                        className="maps__box__boxbox__circle"
                    />
                    <div className="maps__box__boxbox__text">
                      <h3>{delve(item, "boxName")}</h3>
                      <span>{delve(item, "boxCaption")}</span>
                    </div>
                  </div>
                  <p>{delve(item, "boxText")}</p>
                  <Link href={`${delve(item, 'btnUrl')}`} passHref={true}>
                    <a>
                      <button>
                        {delve(item, "btnText")}
                        <FontAwesomeIcon 
                          icon={faArrowUpRightFromSquare} 
                          className="arrow-square"  
                        />
                      </button> 
                    </a>
                  </Link>
                </div>
            ))}
            {/* user box end */}
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
                  className={slideState === index + 1 ? "active" : "else"}
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
