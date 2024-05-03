import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal, updateQuantity } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Modal = ({ isModalOpen, data, handleClose }) => {
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };

    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
    setAddedToCart(true);
  };

  const increaseQuantity = (itemId, currectQuantiy) => {
    const newQty = currectQuantiy + 1;
    setQty(newQty);
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };
  const decreaseQuantity = (itemId, currectQuantiy) => {
    const newQty = Math.max(currectQuantiy - 1, 1);
    setQty(newQty);
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      setQty(1);
      setAddedToCart(false);
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);
  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content w-2/3 relative bg-white overflow-auto">
            <span
              className="absolute top-0 right-0 p-4"
              onClick={() => handleClose()}
            >
              <FaTimes />
            </span>

            <div className="flex">
              <div className="relative">
                <div className="modal-poster">
                  <img src={data.img} alt="" className="max-w-none" />
                </div>

                <div className="tag absolute top-0">
                  <p className="bg-red-500 p-2 rounded-br-xl font-semibold text-white">
                    {data.tag}
                  </p>
                </div>
              </div>

              <div className="modal-info ml-6">
                <p className="text-4xl">{data.short_description}</p>
                <p className="text-red-600 text-xl">${data.price}</p>
                <p className="mt-2">{data.description}</p>

                <div className="flex items-center">
                  <p className="font-semibold mr-2">Shades: </p>
                  <select
                    name="shades"
                    id="shades"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
                  >
                    <option value="options">Choose an Option</option>
                    <option value="waterproof-very-black-802">
                      Waterproof Very Black 802
                    </option>
                    <option value="washable-blackset-black-800">
                      Washable Blackset Black 800
                    </option>
                    <option value="washable-801">Washable 801</option>
                    <option value="cosmic-black">Cosmic Black</option>
                  </select>
                </div>
                <p className="text-green-700">In Stock 300 Items</p>

                <div className="flex items-center">
                  <div className="flex mr-3">
                    <button
                      className="border mt-4 pt-3 pb-3 pr-6 pl-6"
                      onClick={() => decreaseQuantity(data.id, qty)}
                    >
                      <PiMinus />
                    </button>

                    <span className="border mt-4 pt-3 pb-3 pr-6 pl-6 count">
                      {qty || 1}
                    </span>

                    <button
                      className="border mt-4 pt-3 pb-3 pr-6 pl-6"
                      onClick={() => increaseQuantity(data.id, qty)}
                    >
                      <PiPlus />
                    </button>
                  </div>

                  <div className="addtocart mr-3">
                    {addedToCart ? (
                      <button
                        className="mt-4 pt-3 pb-3 pl-6 pr-6 text-white bg-blue-500"
                        onClick={() => {
                          handleClose();
                          document.body.classList.remove("modal-open");
                        }}
                      >
                        <Link to="/cart">View Cart</Link>
                      </button>
                    ) : (
                      <button
                        className="mt-4 pt-3 pb-3 pl-6 pr-6 text-white"
                        onClick={() => addItemToCart(data)}
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
                <div className="font-semibold text-xl category_brand py-5">
                  <h1 className="py-4">
                    Category: <span>{data.category}</span>{" "}
                  </h1>
                  <h1>
                    Brand: <span>{data.brand}</span>{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
