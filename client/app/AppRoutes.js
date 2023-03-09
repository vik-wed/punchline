import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AllMics from "../features/AllMics";
import SingleMic from "../features/SingleMic";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route to="/" element={<AllMics />} />
        <Route path="/:id" element={<SingleMic />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
