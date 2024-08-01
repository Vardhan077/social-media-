import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex h-20 justify-between items-center border-b border-gray-100 w-full px-44 py-2">
      <Link to="/">
        <div className="text-3xl font-extrabold text-gray-900 dark:text-white font-roboto">
          <h1 style={{ fontFamily: "Cooper-Hewitt", fontSize:"40px" }}>Sphere-X</h1>
        </div>
      </Link>
      
    </div>
  );
};

export default Navbar;
