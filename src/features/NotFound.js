import React from "react";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const NotFound = () => {
  return (
    <main className="container m-6 mx-auto max-w-lg flex flex-col gap-5">
      <img
        className="max-w-[40vw]"
        src="https://cdn-icons-png.flaticon.com/512/6358/6358087.png"
        alt="404 error, a drawing of a computer screen with crosses for eyes and a frowning mouth"
      />
      <h1 className="text-3xl text-center font-bold text-accent">
        OOPS SOMETHING WENT WRONG
      </h1>
      <Link className="link link-secondary text-center" to="/mics">
        Go Home
      </Link>
    </main>
  );
};

export default NotFound;
