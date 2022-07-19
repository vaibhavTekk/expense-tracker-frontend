import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  if (isLoading) {
    return (
      <>
        <h1 className=" self-center justify-self-center text-3xl font-bold my-10">Loading.....</h1>
      </>
    );
  }

  return (
    <div className="flex flex-col mx-auto w-1/4 my-auto justify-evenly items-center bg-white drop-shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold m-4">Login</h1>
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-4 w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          className="input input-bordered w-full"
        />
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <Link to="/register" className="btn btn-link m-2">
        New ? Create an Account
      </Link>
    </div>
  );
}

export default Login;
