import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { Component } from "react";
import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Slick = ({title, cards, hide}) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slick__slider',
      };

    return (
      <section className={hide ? "hide" : "slick"}>
        <div className="container center">
            <div>
                <Slider {...settings}>
                {cards &&
                    cards.map((item, index) => (
                    <div className="item">
                        <div className="container sb">
                            <div className="item__left">
                                <div>
                                    <img
                                        src={getStrapiMedia(delve(item, "image.data.attributes.url"))}
                                        alt={delve(item, "image.data.attributes.alternativeText")}
                                    />
                                    <span>
                                        <h4>{delve(item, "title")}</h4>
                                        <p>{delve(item, "caption")}</p>
                                    </span>
                                </div>
                            </div>
                            <div className="item__right">
                                <p>{delve(item, "text")}</p>
                            </div>
                        </div>
                    </div>
                ))}
                </Slider>

            </div>
        </div>
      </section>
    );
  };
  
  Slick.defaultProps = {};
  
  export default Slick;
  