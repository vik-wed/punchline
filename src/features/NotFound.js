import React from "react";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const NotFound = () => {
  return (
    <div>
      <h2>OOOPSIES SOMETHING WENT WRONG</h2>
      <Link className="link link-accent" to="/mics">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
