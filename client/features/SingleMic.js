import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import EditMic from "./EditMic";
/**
 * COMPONENT
 */
const SingleMic = () => {
  const [singleMic, setSingleMic] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getSingleMic = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/mics/${id}`
        );
        setSingleMic(data);
      } catch (err) {
        console.error(err);
      }
    };
    getSingleMic();
  }, [id]);

  return (
    <div>
      <h2>{singleMic.name}</h2>
      <Link to={`/${id}/edit`}>
        <button>Edit Details</button>
      </Link>
      <Routes>
        <Route path="/edit" element={<EditMic id={id} />} />
      </Routes>
    </div>
  );
};

export default SingleMic;
