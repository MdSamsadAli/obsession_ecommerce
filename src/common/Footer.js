import React from "react";
import { footer } from "../data/Data";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="w-10/12 m-auto">
        <div className="flex justify-between pt-14 pb-14">
          <div className="text-gray-500 w-1/4">
            <div className="mb-5">
              <img src="./images/obsessions_ecom/footer_logo.svg" alt="place" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip nonum soc tem
              placerat non proident et just Lorem ipsum dolor sit amet,
              consectetur adip nonum soc tem placerat non proident et just
              consectetur adip nonum soc tem placerat non proident et just
            </p>
          </div>

          {footer.map((item, ind) => (
            <div className="text-gray-500" key={ind}>
              <h1 className="text-2xl mb-5 text-white">{item.header}</h1>
              <p>{item.content1}</p>
              <p>{item.content2}</p>
              <p>{item.content3}</p>
              <p>{item.content4}</p>
              <p>{item.content5}</p>
              <p>{item.content6}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
