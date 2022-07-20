import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="h-auto flex flex-row w-auto bg-indigo-200 items-center justify-between px-8 py-2">
      <Link to="/">
        <h1 className="font-bold text-2xl">Wallt.</h1>
      </Link>
      <ul className="flex flex-row items-center">
        {user ? (
          <>
            <li>
              <p className="font-semibold text-2xl mx-6">{user.name}</p>
            </li>
            <li>
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="btn btn-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary" to="/register">
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
