import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AllMics from "../features/AllMics";
import SingleMic from "../features/SingleMic";
import AddMic from "../features/AddMic";
import EditMic from "../features/EditMic";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMics />} />
        <Route path="/add" element={<AddMic />} />
        <Route path="/:id/*" element={<SingleMic />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
