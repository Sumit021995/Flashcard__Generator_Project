import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (

    // Navbar with AlmaBetter's logo.
    <div className="px-12 py-4 shadow-md bg-white ">
      <div className="w-36">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;