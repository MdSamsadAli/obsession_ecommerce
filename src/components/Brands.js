import React from "react";
import { brands } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../common/Heading";

const Brands = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div>
      <div className="w-10/12 m-auto">
        <div>
          <Heading heading={"Best Deals On The Brands"} />
        </div>
        <Slider {...settings}>
          {brands.map((val, index) => (
            <div className="mt-8 " key={index}>
              <div className="bg-white shadow-md rounded-lg m-2">
                <div className="overflow-hidden relative">
                  <img
                    src={val.img}
                    alt="womenmenaccessories"
                    className="rounded-t-lg h-80 w-full object-cover"
                  />
                </div>
                <div className="product-details p-3 mt-4 mb-4">
                  <p className="mb-2 font-bold text-rose-600">{val.title}</p>
                  <p className="mb-2">{val.short_description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
