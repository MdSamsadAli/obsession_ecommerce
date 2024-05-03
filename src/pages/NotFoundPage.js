import React from "react";
import PageHeading from "../common/PageHeading";

const NotFoundPage = () => {
  return (
    <div>
      <PageHeading home={"Home"} pagename={"Page Not Found"} />
      <div className="text-center text-4xl font-extrabold m-10">
        Page Not Found
      </div>
    </div>
  );
};

export default NotFoundPage;
