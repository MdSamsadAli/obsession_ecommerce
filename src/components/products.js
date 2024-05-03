import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../data/Data";
import { BiCart, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Heading from "../common/Heading";
import { Link } from "react-router-dom";
import Modal from "../common/Modal";

const BestSeller = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };
  const handleClose = () => {
    setIsModalOpen(null);
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <BiChevronRight />,
    prevArrow: <BiChevronLeft />,
  };
  return (
    <div>
      <div className="products w-10/12 m-auto">
        <div>
          <Heading
            heading={"New Products"}
            description={"Lorem Ipsum Nullem Gravidaa, dolro imp onse "}
            btn={<Link to={"/"}>View All</Link>}
          />
        </div>

        <Slider {...settings}>
          {products.map((val, index) => (
            <div className=" mt-8" key={index}>
              <div className="mr-4 border">
                <div className="overflow-hidden relative">
                  <div className="image-container relative">
                    <div className="flash_sale_img">
                      <img src={val.img} alt="img" className="w-full" />
                    </div>

                    <div className="tag absolute top-0">
                      <p className="bg-red-500 p-2 rounded-br-xl font-semibold text-white">
                        {val.tag}
                      </p>
                    </div>
                  </div>

                  <div className="product-details text-center mt-2">
                    <p className="mb-2">{val.short_description}</p>

                    <p className="text-red-600">${val.price}</p>
                  </div>

                  <div className=" bg-rose-300 opacity-65 hover:opacity-100 text-gray-900 pt-4 pb-4 transition-all w-full">
                    <div className="flex justify-center align-middle">
                      <button className="text-2xl">
                        <BiCart />
                      </button>
                      <button
                        className="whitespace-nowrap"
                        onClick={() => handleOpen(val.id)}
                      >
                        {val.btn}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* here we add modal  */}
      <Modal
        isModalOpen={isModalOpen !== null}
        data={products.find((feature) => feature.id === isModalOpen)}
        handleClose={handleClose}
      />
    </div>
  );
};

export default BestSeller;
