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
    <div>
      <h2>Edit Mic</h2>
      <h3>{singleMic.name}</h3>
      <form className="form" onSubmit={submitEditMicHandler}>
        <label htmlFor="description">Description:</label>
        <input
          name="signup"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="venue">
          Venue:<span>*</span>
        </label>
        <input
          required
          name="venue"
          type="text"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />
        <label htmlFor="date">
          Next Date: <span>*</span>
        </label>
        <input
          required
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="time">
          Time:<span>*</span>
        </label>
        <input
          required
          name="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label htmlFor="weekday">Weekday:</label>
        <select value={weekday} onChange={(e) => setWeekday(e.target.value)}>
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
        <input
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
        <label htmlFor="social">
          Instagram URL:<span>*</span>
        </label>
        <input
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
          name="recurring"
          type="text"
          value={recurring}
          onChange={(e) => setRecurring(e.target.value)}
        />
        <label htmlFor="categories">Categories (separate by comma):</label>
        <input
          name="categories"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
        <Link className="cancel-link" to="/mics">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default EditMic;
