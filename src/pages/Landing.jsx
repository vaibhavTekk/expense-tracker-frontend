import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Landing() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="flex flex-col mx-auto my-auto justify-evenly items-center">
      <h1 className="font-bold md:text-3xl text-2xl">Say Hi 👋 to</h1>
      <h1 className="font-bold md:text-9xl text-7xl">Wallt.</h1>
      <h1 className="font-semibold md:text-3xl text-xl">A Simple expense tracker app</h1>
      <Link to="/register" className="btn btn-primary w-1/2 drop-shadow-sm m-6">
        {user ? "Go to Dashboard" : "Get Started"}
      </Link>
    </div>
  );
}

export default Landing;
