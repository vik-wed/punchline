import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>
        <img src="./punchline.png" alt="microphone icon" />
        Punchline
      </h1>
      <nav>
        <Link to="/">All Open Mics</Link>
        <Link to="/add">Submit an Open Mic</Link>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
