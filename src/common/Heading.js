import React from "react";

const Heading = ({ heading, subheading, description, btn }) => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-xl font-extrabold uppercase mb-2">{heading}</h4>
          <h4 className="text-4xl uppercase font-semibold mb-2">
            {subheading}
          </h4>
          <h4 className="mb-2">{description}</h4>
        </div>

        <div className="">
          <button>{btn}</button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
