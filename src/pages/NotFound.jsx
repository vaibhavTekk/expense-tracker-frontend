import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col mx-auto my-auto justify-evenly items-center">
      <h1 className="font-bold md:text-3xl text-2xl">Oops !</h1>
      <h1 className="font-bold md:text-9xl text-7xl">404</h1>
      <h1 className="font-semibold md:text-3xl text-xl">Page Not Found</h1>
      <Link to="/" className="btn btn-primary w-1/2 drop-shadow-sm m-6">
        Go Back
      </Link>
    </div>
  );
}

export default NotFound;
