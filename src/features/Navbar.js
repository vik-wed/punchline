import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-base-300">
        <div className="flex-1">
          <h1 className="btn btn-ghost normal-case text-xl">
            <img
              style={{ height: "10vh" }}
              src="./punchline.png"
              alt="microphone icon"
            />
            Punchline
          </h1>
        </div>
        <div className="flex-3">
          <Link className="normal-case text-xl" to="/mics">
            All Open Mics
          </Link>
          <Link className="justify-between normal-case text-xl" to="/mics/add">
            Submit an Open Mic
          </Link>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
