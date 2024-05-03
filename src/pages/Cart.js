import React, { useEffect } from "react";
import PageHeading from "../common/PageHeading";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem, updateQuantity } from "../redux/cartSlice";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiMinus, PiPlus } from "react-icons/pi";

const Cart = () => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount } = useSelector(
    (state) => state.cart
  );

  const cartSelector = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartSelector]);

  const removeItemFromCart = (itemId) => {
    dispatch(removeItem({ id: itemId }));
    dispatch(getCartTotal());
  };

  const decreaseQuantity = (itemId, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: currentQuantity - 1 }));
      dispatch(getCartTotal());
    }
  };

  const increaseQuantity = (itemId, currentQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: currentQuantity + 1 }));
    dispatch(getCartTotal());
  };

  return (
    <div>
      <PageHeading home={"Home"} pagename={"Cart"} />
      <div className="text-center text-4xl font-extrabold m-10">
        Your Products
      </div>

      <div>
        <div className="w-10/12 m-auto">
          <div className="mb-4">
            {cartProducts.length === 0 ? (
              <div className=" border-b pb-4 text-center">
                <p className="text-3xl font-bold uppercase">
                  Your Cart Has No Items
                </p>
                <div className="rounded-3xl mt-4 text-white text-xl bg-red-500 inline-block pt-3 pb-3 pr-8 pl-8">
                  <Link to={"/"}>Return To Shopping</Link>
                </div>
              </div>
            ) : (
              <>
                <div>
                  <table className="w-full shadow-2xl rounded-2xl">
                    <thead className="bg-blue-950 text-white font-semibold">
                      <tr>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2">Product</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Quantity</th>
                        <th className="px-4 py-2">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartProducts.map((item, key) => (
                        <tr key={key}>
                          <td className="text-center px-4 py-2">
                            <button
                              onClick={() => removeItemFromCart(item.id)}
                              className="text-red-500"
                            >
                              <FaTimes />
                            </button>
                          </td>
                          <td className="text-center px-4 py-2">
                            <div className="flex items-center justify-center">
                              <img
                                src={item.img}
                                className="h-40 w-40 object-contain mr-2"
                                alt="Product"
                              />
                              <p className="font-semibold">{item.title}</p>
                            </div>
                          </td>
                          <td className="text-center px-4 py-2">
                            ${item.price}
                          </td>
                          <td className="text-center px-4 py-2">
                            <div className="flex items-center justify-center">
                              <div className="flex mr-3">
                                <button
                                  className="border mt-4 pt-3 pb-3 pr-6 pl-6"
                                  onClick={() =>
                                    decreaseQuantity(item.id, item.quantity)
                                  }
                                >
                                  <PiMinus />
                                </button>

                                <span className="border mt-4 pt-3 pb-3 pr-6 pl-6 count">
                                  {item.quantity}
                                </span>

                                <button
                                  className="border mt-4 pt-3 pb-3 pr-6 pl-6"
                                  onClick={() =>
                                    increaseQuantity(item.id, item.quantity)
                                  }
                                >
                                  <PiPlus />
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="text-center px-4 py-2">
                            ${item.price * item.quantity}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 w-2/5 rounded-2xl font-bold shadow-2xl bg-white mt-4">
                  <h1 className="mb-4 text-center text-3xl">Cart Total</h1>
                  <div className="flex justify-between">
                    <span>Sub Total :</span>
                    <span>$ {totalAmount}</span>
                  </div>

                  <div className="flex justify-between mt-3">
                    <span>Shipping Charge :</span>
                    <span>$ 10</span>
                  </div>

                  <div className="flex justify-between mt-3">
                    <span>Grand Total :</span>
                    <span>${totalAmount + 10}</span>
                  </div>

                  <div className="whitespace-nowrap flex items-center justify-between mt-4">
                    <div className="px-4 py-2 bg-rose-800 rounded-lg text-white">
                      <Link>Proceed To Checkout</Link>
                    </div>
                    <div className="px-4 py-2 bg-rose-800 rounded-lg text-white">
                      <Link to={"/shop"}>Continue Shoping</Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
