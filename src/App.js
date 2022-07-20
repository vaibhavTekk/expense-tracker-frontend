import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-[url('./img/bg.svg')] bg-bottom bg-no-repeat bg-contain">
      <div className="flex flex-col h-screen overflow-y-scroll">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <p className="text-white font-semibold mt-4 mb-6 text-center">Made with 💖 by Vaibhav T S</p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
