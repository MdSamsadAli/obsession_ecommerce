import React, { useState } from "react";
import { products } from "../data/Data";
import { BiCart } from "react-icons/bi";
import Heading from "../common/Heading";
import Modal from "../common/Modal";

const FlashSale = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };
  const handleClose = () => {
    setIsModalOpen(null);
  };

  return (
    <div>
      <div className="w-10/12 m-auto">
        <Heading
          heading={"Flash Sales"}
          description={"Hot Picks: Top Sellers, grab Yours ! "}
          btn={"Limited Offer"}
        />
      </div>
      <div className="w-10/12 m-auto">
        <div className="grid grid-cols-5 gap-3">
          {products.map((val, index) => (
            <div className="features gap-8 mt-8 border" key={index}>
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
          ))}
        </div>
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

export default FlashSale;
