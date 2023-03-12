import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

/**
 * COMPONENT
 */
const EditMic = () => {
  const [description, setDescription] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [weekday, setWeekday] = useState("");
  const [price, setPrice] = useState("");
  const [signup, setSignup] = useState("");
  const [setTiming, setSetTiming] = useState(0);
  const [social, setSocial] = useState("");
  const [recurring, setRecurring] = useState("");
  const [categories, setCategories] = useState("");

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
  }, []);

  const [singleMic, setSingleMic] = useState({});

  useEffect(() => {
    setDescription(singleMic.description);
    setVenue(singleMic.venue);
    setDate(singleMic.date);
    setTime(singleMic.time);
    setWeekday(singleMic.weekday);
    setPrice(singleMic.price);
    setSignup(singleMic.signup);
    setSetTiming(singleMic.setTime);
    setSocial(singleMic.social);
    setRecurring(singleMic.recurring);
    setCategories(singleMic.categories);
  }, [singleMic]);

  const { id } = useParams();
  const navigate = useNavigate();

  const submitEditMicHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/mics/${id}`, {
        description,
        venue,
        date,
        time,
        weekday,
        price,
        signup,
        setTime: setTiming,
        social,
        recurring,
        categories,
      });
      navigate(`/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="container my-5 mx-auto max-w-xs flex flex-col gap-2 ">
      <h1 className="text-2xl text-center font-bold text-secondary">
        Edit Mic
      </h1>
      <h3 className="text-xl font-bold">{singleMic.name}</h3>
      <form
        className="form flex flex-col gap-2"
        onSubmit={submitEditMicHandler}
      >
        <label htmlFor="description">Description:</label>
        <textarea
          className="textarea textarea-bordered"
          name="signup"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className="flex justify-between" htmlFor="venue">
          Venue:<span className="font-semibold text-accent">required</span>
        </label>
        <input
          className="input input-bordered input-accent w-full max-w-xs"
          required
          name="venue"
          type="text"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />
        <label className="flex justify-between" htmlFor="date">
          Next Date:<span className="font-semibold text-accent">required</span>
        </label>
        <input
          className="input input-bordered input-accent w-full max-w-xs"
          required
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label className="flex justify-between" htmlFor="time">
          Time:<span className="font-semibold text-accent">required</span>
        </label>
        <input
          className="input input-bordered input-accent w-full max-w-xs"
          required
          name="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label htmlFor="weekday">Weekday:</label>
        <select
          value={weekday}
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setWeekday(e.target.value)}
        >
          <option value="null"> </option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
          <option value="varies">Multiple Days</option>
        </select>
        <label className="flex justify-between" htmlFor="price">
          Entry fee/Drink Minimum etc:
          <span className="font-semibold text-accent">required</span>
        </label>
        <input
          className="input input-bordered input-accent w-full max-w-xs"
          name="price"
          required
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="signup">Signup Info:</label>
        <input
          className="input input-bordered w-full max-w-xs"
          name="signup"
          rows="5"
          cols="25"
          value={signup}
          onChange={(e) => setSignup(e.target.value)}
        />
        <label htmlFor="setTime">Minutes per Set:</label>
        <input
          className="input input-bordered w-full max-w-xs"
          name="setTime"
          type="number"
          value={setTiming}
          onChange={(e) => setSetTiming(e.target.value)}
        />
        <label className="flex justify-between" htmlFor="social">
          Instagram URL:
          <span className="font-semibold text-accent">required</span>
        </label>
        <input
          className="input input-bordered input-accent w-full max-w-xs"
          required
          name="social"
          type="text"
          value={social}
          onChange={(e) => setSocial(e.target.value)}
        />
        <label htmlFor="recurring">
          Is the Mic recurring (e.g. weekly, monthly, biweekly):
        </label>
        <input
          className="input input-bordered w-full max-w-xs"
          name="recurring"
          type="text"
          value={recurring}
          onChange={(e) => setRecurring(e.target.value)}
        />
        <label htmlFor="categories">Categories (separate by comma):</label>
        <input
          className="input input-bordered w-full max-w-xs"
          name="categories"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
        <div className="flex flex-row justify-evenly items-center">
          <button
            className="btn btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg  "
            type="submit"
          >
            Submit
          </button>
          <Link className="link link-accent" to="/mics">
            Cancel
          </Link>
        </div>
      </form>
    </main>
  );
};

export default EditMic;
