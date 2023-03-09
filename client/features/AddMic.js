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
  const [location, setLocation] = useState("");
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
      const { data } = await axios.post("http://localhost:8080/api/mics", {
        name,
        description,
        venue,
        location,
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
    <div>
      <h2>Submit a Mic</h2>
      <form className="form" onSubmit={submitAddMicHandler}>
        <label htmlFor="name">Mic Name:</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          className="longer-input"
          name="signup"
          rows="5"
          cols="25"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="venue">Venue:</label>
        <input
          name="venue"
          type="text"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />
        <label htmlFor="location">Location:</label>
        <input
          name="location"
          type="text" // see if there is a different type
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="date">Next Date:</label>
        <input
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="time">Time:</label>
        <input
          name="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label htmlFor="weekday">Weekday:</label>
        <select onChange={(e) => setWeekday(e.target.value)}>
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
        <label htmlFor="price">Entry fee/Drink Minimum etc:</label>
        <input
          name="price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="signup">Signup Info:</label>
        <textarea
          className="longer-input"
          name="signup"
          rows="5"
          cols="25"
          value={signup}
          onChange={(e) => setSignup(e.target.value)}
        />
        <label htmlFor="setTime">Minutes per Set:</label>
        <input
          name="setTime"
          type="number"
          value={setTiming}
          onChange={(e) => setSetTiming(e.target.value)}
        />
        <label htmlFor="social">Instagram URL:</label>
        <input
          name="social"
          type="text"
          value={social}
          onChange={(e) => setSocial(e.target.value)}
        />
        <label htmlFor="recurring">
          Is the Mic recurring (e.g. weekly, monthly, biweekly):
        </label>
        <input
          name="recurring"
          type="text"
          value={recurring}
          onChange={(e) => setRecurring(e.target.value)}
        />
        <label htmlFor="categories">Categories (separate by comma):</label>
        <textarea
          className="longer-input"
          name="categories"
          rows="5"
          cols="25"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
        <Link className="cancel-link" to="/">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default AddMic;
