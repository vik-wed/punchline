import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

/**
 * COMPONENT
 */
const AllMics = () => {
  const [allMics, setAllMics] = useState([]);

  useEffect(() => {
    const getAllMics = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/mics");
        setAllMics(data);
      } catch (err) {
        console.error(err);
      }
    };
    getAllMics();
  }, []);

  return (
    <div>
      {allMics && allMics.length ? (
        <div>
          <h2>All Mics</h2>
          <div>
            {allMics?.map((mic) => {
              return (
                <div>
                  <h3>{mic.name}</h3>
                  <p>{mic.weekday}</p>
                  <Link to={`/${mic.id}`}>
                    <button>View Details</button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h2>Mics are Loading</h2>
      )}
    </div>
  );
};

export default AllMics;
