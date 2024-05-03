import React from "react";
import { offer } from "../data/Data";

const Offer = () => {
  return (
    <div className="mt-8">
      <div className="w-10/12 m-auto">
        <div className="grid grid-cols-3 gap-6">
          {offer.map((data, key) => (
            <div key={key}>
              <div>
                <img src={data.customer_img} alt="imgs" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
