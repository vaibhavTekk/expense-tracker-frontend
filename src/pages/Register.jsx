import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

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
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const formdata = { name, email, password };
      dispatch(register(formdata));
    }
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
      <h1 className="text-2xl font-bold m-4">Sign Up</h1>
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-4 w-full">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
          className="input input-bordered w-full"
        />
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
        <input
          type="password"
          value={password2}
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
          placeholder="Confirm Password"
          className="input input-bordered w-full"
        />
        <input type="submit" className="btn btn-primary" value="Create Account" />
      </form>
      <Link to="/login" className="btn btn-link m-2">
        Already have an account ? Login
      </Link>
    </div>
  );
}

export default Register;
