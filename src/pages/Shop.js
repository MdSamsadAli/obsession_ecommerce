import React, { useState } from "react";
import PageHeading from "../common/PageHeading";
import { BiCart } from "react-icons/bi";
import { products } from "../data/Data";
import Modal from "../common/Modal";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };
  const handleClose = () => {
    setIsModalOpen(null);
  };

  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 1000], // Initial price range
  });

  const categoryList = Array.from(
    new Set(products.map((product) => product.category))
  );

  const brandList = Array.from(
    new Set(products.map((product) => product.brand))
  );

  const filteredProducts = products.filter((product) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    )
      return false;
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand))
      return false;
    const price = parseFloat(product.price);
    if (
      price < filters.priceRange[0] || // Check if price is below minimum
      price > filters.priceRange[1] // Check if price is above maximum
    )
      return false;
    return true;
  });

  const handleCheckboxChange = (filterType, value) => {
    const updatedFilters = [...filters[filterType]];
    const index = updatedFilters.indexOf(value);
    if (index === -1) {
      updatedFilters.push(value);
    } else {
      updatedFilters.splice(index, 1);
    }
    setFilters({ ...filters, [filterType]: updatedFilters });
  };

  const handlePriceChange = (value) => {
    setFilters({ ...filters, priceRange: value });
  };

  return (
    <div>
      <PageHeading home={"Home"} pagename={"Shop"} />

      <div className="flex gap-3 items-start w-10/12 m-auto mt-8">
        <div className="filterproduct w-1/4 bg-white shadow-lg p-4">
          <div>
            <div className="my-4">
              <h1 className="text-4xl font-extrabold">Filter</h1>
            </div>

            <div className="my-4">
              <h1 className="mb-3 text-3xl font-semibold">Price Range</h1>
              <div>
                <Slider
                  min={0}
                  max={1500}
                  range
                  defaultValue={filters.priceRange}
                  onChange={handlePriceChange}
                />
              </div>
            </div>
            <div>
              <div>
                <h2 className="mb-3 text-3xl font-semibold">Categories</h2>
                {categoryList.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() =>
                        handleCheckboxChange("categories", category)
                      }
                    />
                    <div>{category}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="mb-3 text-3xl font-semibold">Brands</h1>
              <div>
                {brandList.map((brand, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleCheckboxChange("brands", brand)}
                    />
                    <div>{brand}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-4 gap-3">
            {filteredProducts.map((val, index) => (
              <div className="border" key={index}>
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

export default Shop;
