import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="/carousel/1.jpg" />
        </div>
        <div>
          <img src="/carousel/2.jpg" />
        </div>
        <div>
          <img src="/carousel/3.jpg" />
        </div>
        <div>
          <img src="/carousel/4.jpg" />
        </div>
        <div>
          <img src="/carousel/5.jpg" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
