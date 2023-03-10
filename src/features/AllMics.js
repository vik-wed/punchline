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
      <div className="filter">
        <form onSubmit={handleWeekdaySubmit}>
          <h3>Day of the Week</h3>
          <input type="checkbox" name="weekday" value="Monday" />
          <label htmlFor="monday">Monday</label>
          <input type="checkbox" name="weekday" value="Tuesday" />
          <label htmlFor="tuesday">Tuesday</label>
          <input type="checkbox" name="weekday" value="Wednesday" />
          <label htmlFor="wednesday">Wednesday</label>
          <input type="checkbox" name="weekday" value="Thursday" />
          <label htmlFor="thursday">Thursday</label>
          <input type="checkbox" name="weekday" value="Friday" />
          <label htmlFor="friday">Friday</label>
          <input type="checkbox" name="weekday" value="Saturday" />
          <label htmlFor="saturday">Saturday</label>
          <input type="checkbox" name="weekday" value="Sunday" />
          <label htmlFor="sunday">Sunday</label>
          <button type="submit">Filter</button>
        </form>
        <button onClick={handleReset}>Reset</button>
      </div>

      {allMics && allMics.length ? (
        <div>
          <h2>All Mics</h2>
          <div>
            {allMics?.map((mic) => {
              return (
                <div key={mic.id}>
                  <h3>{mic.name}</h3>
                  <a href={mic.social}>Instagram</a>
                  <Link to={`/mics/${mic.id}`}>
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
