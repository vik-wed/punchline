import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-300 flex justify-between">
      <p className="text-3xl font-bold">
        <img
          className="max-h-[2.5rem] mx-2"
          src="https://cdn-icons-png.flaticon.com/512/110/110132.png"
          alt="Logo of the site, a drawing of a microphone with three crosses around it representing sparkles"
        />
        Punchline
      </p>

      <div className="flex flex-wrap basis-1/3 justify-around">
        <Link className="text-xl" to="/mics">
          All Open Mics
        </Link>
        <Link className="text-xl" to="/mics/add">
          Submit an Open Mic
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
