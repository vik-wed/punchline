import React from "react";
import { Route, Routes } from "react-router-dom";
import AllMics from "../features/AllMics";
import SingleMic from "../features/SingleMic";
import AddMic from "../features/AddMic";
import EditMic from "../features/EditMic";
import NotFound from "../features/NotFound";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMics />} />
        <Route exact path="/mics" element={<AllMics />} />
        <Route exact path="/mics/add" element={<AddMic />} />

        <Route exact path="/mics/:id" element={<SingleMic />} />
        <Route exact path="/mics/:id/edit" element={<EditMic />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
