import React from "react";
import { category } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className="bg-rose-100">
      <div className="w-10/12 m-auto">
        <Slider {...settings}>
          {category.map((val, index) => (
            <div key={index}>
              <div className="overflow-hidden m-2 text-center">
                <div className="category-img-wrapper">
                  <img
                    src={val.img}
                    alt="womenmenaccessories"
                    className="w-auto h-full object-cover rounded-full"
                  />


                  
                </div>
                <p className="text-sm capitalize">{val.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Category;
