import React from "react";
import { Link } from "react-router-dom";
import { navbar } from "../data/Data";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 shadow-xl bg-rose-100">
      <div className="flex flex-wrap justify-between items-center w-10/12 m-auto ">
        <ul className="flex flex-wrap text-base pt-3 pb-3">
          {navbar.slice(4, 10).map((nav, index) => (
            <li className="mr-5 hover:border-b-2 border-b-red-600">
              <Link className="hover:text-red-600 " to={nav.path}>
                {nav.nav}
              </Link>
            </li>
          ))}
        </ul>

        <div className="bg-red-600 pt-3 pb-3 text-white font-bold pl-3 pr-3 uppercase text-xl transform-skew">
          <h1>
            Coupon Code : <span> ENTRTNT321</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
