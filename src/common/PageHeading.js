import React from "react";
import { Link } from "react-router-dom";

const PageHeading = ({ home, pagename }) => {
  return (
    <div>
      <div className="bg-gray-300 text-center p-10">
        <h1 className="text-3xl font-bold">{pagename}</h1>
        <p>
          <Link to={"/"}>{home}</Link>/ {pagename}
        </p>
      </div>
    </div>
  );
};

export default PageHeading;
