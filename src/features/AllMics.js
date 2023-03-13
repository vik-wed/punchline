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
        const { data } = await axios.get("/api/mics");
        setAllMics(data);
      } catch (err) {
        console.error(err);
      }
    };
    getAllMics();
  }, []);

  const handleReset = async () => {
    document.getElementById("filter-weekdays").reset();
    const { data } = await axios.get("/api/mics");
    setAllMics(data);
  };

  const handleWeekdaySubmit = async (evt) => {
    evt.preventDefault();
    let results = evt.target;
    const newArr = [];
    for (const result of results) {
      if (result.checked) {
        const { data } = await axios.get("/api/mics");
        data?.filter((mic) => {
          if (mic.weekday === result.value) {
            newArr.push(mic);
          }
        });
      }
    }
    setAllMics(newArr);
  };

  return (
    <main className="container m-5 mx-auto flex flex-col">
      <div className="form-control">
        <form
          id="filter-weekdays"
          className="flex flex-wrap mx-auto justify-evenly max-w-lg gap-2"
          onSubmit={handleWeekdaySubmit}
        >
          <h2 className="text-xl font-bold text-center basis-full">
            Filter by Day of the Week
          </h2>
          <label
            className="label cursor-pointer gap-x-4
          "
          >
            <span className="label-text">Monday</span>
            <input
              className="checkbox"
              type="checkbox"
              name="weekday"
              value="Monday"
            />
          </label>
          <label className="label cursor-pointer gap-x-4">
            <span className="label-text">Tuesday</span>
            <input
              className="checkbox"
              type="checkbox"
              name="weekday"
              value="Tuesday"
            />
          </label>
          <label className="label cursor-pointer gap-x-4">
            <span className="label-text">Wednesday</span>
            <input
              className="checkbox"
              type="checkbox"
              name="weekday"
              value="Wednesday"
            />
          </label>
          <label className="label cursor-pointer gap-x-4">
            <span
              className="label-text
            "
            >
              Thursday
            </span>
            <input
              className="checkbox"
              type="checkbox"
              name="weekday"
              value="Thursday"
            />
          </label>
          <label
            className="label cursor-pointer gap-x-4
          "
          >
            <span className="label-text">Friday</span>
            <input
              className="checkbox"
              type="checkbox"
              name="weekday"
              value="Friday"
            />
          </label>
          <label
            className="label cursor-pointer gap-x-4
          "
          >
            <span className="label-text">Saturday</span>
            <input
              className="checkbox"
              type="checkbox"
              name="weekday"
              value="Saturday"
            />
          </label>
          <label
            className="label cursor-pointer gap-x-4
          "
          >
            <span className="label-text">Sunday</span>
            <input
              className="checkbox"
              type="checkbox"
              name="weekday"
              value="Sunday"
            />
          </label>
          <div className="flex basis-full justify-center gap-x-4">
            <button className="btn btn-secondary  " type="submit">
              {" "}
              Filter
            </button>
            <button
              className="btn btn-outline btn-accent "
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {allMics && allMics.length ? (
        <div className="my-5 mx-auto flex flex-wrap gap-2 ">
          <h1 className="text-2xl text-center font-bold text-secondary basis-full">
            All Mics
          </h1>
          <div className="flex flex-wrap gap-3 justify-between md:justify-center">
            {allMics?.map((mic) => {
              return (
                <div
                  className="card min-w-[32%] mx-auto bg-primary text-primary-content"
                  key={mic.id}
                >
                  <div className="card-body flex flex-wrap">
                    <h2 className="card-title">{mic.name}</h2>
                    <a
                      className="link link-neutral"
                      href={mic.social}
                      target="_blank"
                    >
                      Instagram
                    </a>
                    <div className="card-actions justify-end">
                      <Link className="link" to={`/mics/${mic.id}`}>
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1 className="text-2xl text-center font-bold text-accent">
          Something went wrong
        </h1>
      )}
    </main>
  );
};

export default AllMics;
