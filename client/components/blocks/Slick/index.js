import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { Component } from "react";

const Slick = ({title}) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slick__slider'
      };

    return (
      <section className="slick">
        <div className="container center">
            <div>
                <Slider {...settings}>
                <div className="item">
                    <div className="container sb">
                        <div className="item__left">
                            <div>
                                <img/>
                                <h3>Heading 3</h3>
                                <span>caption</span>
                            </div>
                        </div>
                        <div className="item__right">
                            <p>“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no”</p>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="container sb">
                        <div className="item__left">
                            <div>
                                <img/>
                                <h3>Heading 3</h3>
                                <span>caption</span>
                            </div>
                        </div>
                        <div className="item__right">
                            <p>“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no”</p>
                        </div>
                    </div>
                </div>
                
                <div className="item">
                    <div className="container sb">
                        <div className="item__left">
                            <div>
                                <img/>
                                <h3>Heading 3</h3>
                                <span>caption</span>
                            </div>
                        </div>
                        <div className="item__right">
                            <p>“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no”</p>
                        </div>
                    </div>
                </div>

                </Slider>
            </div>
        </div>
      </section>
    );
  };
  
  Slick.defaultProps = {};
  
  export default Slick;
  