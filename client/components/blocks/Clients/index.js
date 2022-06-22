import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { Component } from "react";

const Clients = ({title, hide}) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      loop: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      className: 'clients__slider'
    };

    return (
      <section className={hide ? "hide" : "clients"}>
        <div className="container center">
          <Slider {...settings}>
            <img />
            <img />
            <img />
            <img />
            <img />
          </Slider>
        </div> 
      </section>
    );
  
  };
  
  Clients.defaultProps = {};
  
  export default Clients;
  