import delve from 'dlv';
import { useState } from 'react';
import { getStrapiMedia } from '../../../utils';
import Map from './maps';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Maps = ({ image, caption, value, text, subTitle, title }) => {
const WrappedMap = withScriptjs(withGoogleMap(Map)) 

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
            <button>Visible Website</button>
          </div>
        </div> 
      </div>
      <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: '100%' }}/>}
        containerElement={<div style={{ height: '100%' }}/>}
        mapElement={<div style={{ height: '100%' }}/>}
      />
      </div>

    </section>
  ); 
};


Maps.defaultProps = {};

export default Maps;            
