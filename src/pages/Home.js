import React from "react";
import {
  Banner,
  BestSeller,
  Brands,
  Category,
  FlashSale,
  Arrived,
  Offer,
} from "./index";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <FlashSale />
      <Offer />
      <BestSeller />
      <Arrived />
      <Brands />
    </div>
  );
};

export default Home;
