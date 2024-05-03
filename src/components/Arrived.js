import React, { useRef } from "react";
import { arriveItems } from "../data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Arrived = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };

  const sliderRef = useRef(null);
  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <div className="bg-gray-200 mt-4 pt-8 pb-8 mb-4">
        <div className="w-10/12 m-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-5xl font-semibold">Just Arrived</h1>
              </div>
              <div className="flex text-4xl">
                <BiChevronLeft className="arrows" onClick={goToPrevSlide} />
                <BiChevronRight className="arrows" onClick={goToNextSlide} />
              </div>
            </div>
          </div>
          <div>
            <div>
              <Slider {...settings} ref={sliderRef}>
                {arriveItems.map((item, key) => (
                  <div key={key}>
                    <div className="mr-4">
                      <img src={item.img} alt="img" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 w-10/12 m-auto">
        <div>
          <img
            src="../images/obsessions_ecom/4.webp"
            className="rounded-lg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Arrived;
