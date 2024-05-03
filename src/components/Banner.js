import React from "react";
import { banners } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <BiChevronRight />,
    prevArrow: <BiChevronLeft />,
  };
  return (
    <div>
      <div className="w-full">
        <Slider {...settings}>
          {banners.map((data, key) => (
            <div key={key}>
              <img src={data.banner} alt="bannerimg" width={"100%"} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
