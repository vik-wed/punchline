import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const Navbar = () => {
  return (
    <div>
      <h1>FS-App-Template</h1>
      <nav>
        <div>{/* The navbar will show these links before you log in */}</div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
