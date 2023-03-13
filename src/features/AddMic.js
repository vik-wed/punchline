import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

/**
 * COMPONENT
 */
const AddMic = () => {
  const [name, setName] = useState("");
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

  const navigate = useNavigate();

  const submitAddMicHandler = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/api/mics", {
        name,
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
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="container my-5 mx-auto max-w-xs flex flex-col gap-2 ">
      <h1 className="text-2xl text-center font-bold text-secondary">
        Submit a Mic
      </h1>
      <form
        className="form flex flex-col gap-2 "
        onSubmit={submitAddMicHandler}
      >
        <label className="flex justify-between" htmlFor="name">
          Mic Name:
          <span className="font-semibold text-accent">required</span>
        </label>
        <input
          className="input input-bordered input-accent w-full max-w-xs"
          placeholder="Funny Open Mic"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="The Funny Open Mic is funny and hilarious"
          name="signup"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className="flex justify-between" htmlFor="venue">
          Venue:<span className="font-semibold text-accent">required</span>
        </label>
        <input
          className="input input-bordered input-accent w-full max-w-xs"
          placeholder="Club Cumming"
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
          name="date"
          required
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label className="flex justify-between" htmlFor="time">
          Time:<span className="font-semibold text-accent">required</span>
        </label>
        <input
          className="input input-bordered input-accent w-full max-w-xs"
          name="time"
          required
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label htmlFor="weekday">Weekday:</label>
        <select
          className="select select-bordered w-full max-w-xs"
          value={weekday}
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
          placeholder="1 Drink Minimum/Entry fee/Signup fee"
          type="text"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="signup">Signup Info:</label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Google Form (add a link if available)/Bucket/In-person etc."
          name="signup"
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
          placeholder="https://instagram.com/funnyopenmic"
          name="social"
          type="text"
          value={social}
          onChange={(e) => setSocial(e.target.value)}
        />
        <label htmlFor="recurring">Is the Mic recurring:</label>
        <input
          className="input input-bordered w-full max-w-xs"
          name="recurring"
          placeholder="weekly/biweekly/monthly/every 1st and 3rd wednesday of the month"
          type="text"
          value={recurring}
          onChange={(e) => setRecurring(e.target.value)}
        />
        <label htmlFor="categories">Categories (separate by comma):</label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="LGBTQ+, Women, BIPOC, etc."
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

export default AddMic;
