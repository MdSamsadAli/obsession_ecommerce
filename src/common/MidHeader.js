import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbar } from "../data/Data";
import { BiSolidShoppingBag, BiUser } from "react-icons/bi";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const MidHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { totalItems } = useSelector((state) => state.cart);

  return (
    <div>
      <div className="p-4">
        <div className="w-10/12 m-auto">
          <ul className="flex place-content-between items-center">
            <li className="flex items-center">
              <Link to={"/"} className="logo">
                <img
                  src="./images/obsessions_ecom/obsession_logo.png"
                  alt="place"
                />
              </Link>
              {navbar.slice(1, 4).map((link, key) => (
                <Link
                  to={link.path}
                  className="mr-2 text-base  capitalize pr-4 pl-4 hover:text-red-600"
                  key={key}
                >
                  {link.nav}
                </Link>
              ))}
            </li>
            <li className="flex place-items-center">
              <input
                type="search"
                className="w-full p-2 border rounded-lg mr-5 outline-none ring-offset-0"
                placeholder="Search..."
              />

              <Link
                onClick={toggleSidebar}
                className="relative mr-5 text-2xl text-gray-500 rounded-full border p-2"
              >
                <BiSolidShoppingBag />

                <div className="items_count">
                  <span className="text-white">{totalItems}</span>
                </div>
              </Link>
              <Link className="mr-5 text-2xl text-gray-500 rounded-full border p-2">
                <BiUser />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={() => setTimeout(toggleSidebar(), 6000)}
      />
    </div>
  );
};

export default MidHeader;
