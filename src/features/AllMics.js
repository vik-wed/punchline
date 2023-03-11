import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style.css";
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

  const handleReset = async () => {
    const { data } = await axios.get("http://localhost:8080/api/mics");
    setAllMics(data);
  };

  const handleWeekdaySubmit = (evt) => {
    evt.preventDefault();
    let results = evt.target;
    const newArr = [];
    for (const result of results) {
      if (result.checked) {
        allMics.filter((mic) => {
          if (mic.weekday === result.value) {
            newArr.push(mic);
          }
        });
      }
    }
    setAllMics(newArr);
  };

  return (
    <div>
      <div className="form-control">
        <form onSubmit={handleWeekdaySubmit}>
          <h3>Day of the Week</h3>
          <label className="label cursor-pointer">
            <input
              className="checkbox"
              type="checkbox"
              name="weekday"
              value="Monday"
            />
            <span className="label-text">Monday</span>
          </label>
          <label className="label cursor-pointer">
            <input
              className="checkbox"
              type="checkbox"
              name="weekday"
              value="Tuesday"
            />
            <span className="label-text">Tuesday</span>
          </label>
          <label className="label cursor-pointer">
            <input
              className="checkbox"
              type="checkbox"
              name="weekday"
              value="Wednesday"
            />
            <span className="label-text">Wednesday</span>
          </label>
          <label className="label cursor-pointer">
            <input
              className="checkbox"
              type="checkbox"
              name="weekday"
              value="Thursday"
            />
            <span className="label-text">Thursday</span>
          </label>
          <label className="label cursor-pointer">
            <input
              className="checkbox"
              type="checkbox"
              name="weekday"
              value="Friday"
            />
            <span className="label-text">Friday</span>
          </label>
          <label className="label cursor-pointer">
            <input
              className="checkbox"
              type="checkbox"
              name="weekday"
              value="Saturday"
            />
            <span className="label-text">Saturday</span>
          </label>
          <label className="label cursor-pointer">
            <input
              className="checkbox"
              type="checkbox"
              name="weekday"
              value="Sunday"
            />
            <span className="label-text">Sunday</span>
          </label>
          <button
            className="btn btn-outline btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg  "
            type="submit"
          >
            {" "}
            Filter
          </button>
        </form>
        <button
          className="btn btn-outline btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg  "
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      {allMics && allMics.length ? (
        <div>
          <h2>All Mics</h2>
          <div>
            {allMics?.map((mic) => {
              return (
                <div
                  className="card w-96 bg-primary text-primary-content "
                  key={mic.id}
                >
                  <div className="card-body">
                    <h2 className="card-title">{mic.name}</h2>
                    <a href={mic.social}>Instagram</a>
                    <div className="card-actions justify-end">
                      <Link to={`/mics/${mic.id}`}>
                        <button className="btn  btn-active btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
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
