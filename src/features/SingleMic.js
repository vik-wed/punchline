import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Loader } from "@googlemaps/js-api-loader";

/**
 * COMPONENT
 */
const SingleMic = () => {
  const [singleMic, setSingleMic] = useState({});
  const { id } = useParams();

  const {
    name,
    description,
    venue,
    date,
    time,
    weekday,
    price,
    signup,
    setTime,
    social,
    recurring,
    categories,
  } = singleMic;

  const loader = new Loader({
    apiKey: process.env.REACT_APP_GMAPS_API,
    version: "weekly",
    libraries: ["maps", "places"],
  });

  function getMap(google) {
    let map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 40.7128,
        lng: -74.006,
      },
      zoom: 20,
    });
    const request = {
      query: `${venue}`,
      fields: ["name", "geometry", "formatted_address", "rating"],
      locationBias: {
        lat: 40.7128,
        lng: -74.006,
      },
    };
    const service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }

        map.setCenter(results[0].geometry.location);
      }
    });
    function createMarker(place) {
      if (!place.geometry || !place.geometry.location) return;
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });
      const contentString =
        "<div>" +
        `<h3>${place.name}</h1>` +
        `<p><strong>Address:</strong> ${place.formatted_address}</p>` +
        `<p><strong>Rating:</strong> ${place.rating}</p>` +
        "</div>";
      const infowindow = new google.maps.InfoWindow({ content: contentString });
      infowindow.open(map, marker);
    }
  }

  loader
    .load()
    .then((google) => getMap(google))
    .catch((er) => {
      console.error(er);
    });

  useEffect(() => {
    const getSingleMic = async () => {
      try {
        const { data } = await axios.get(`/api/mics/${id}`);
        setSingleMic(data);
      } catch (err) {
        console.error(err);
      }
    };
    getSingleMic();
  }, [id]);

  const currentDate = new Date();
  const eventDate = new Date(date);

  return (
    <main className="container m-5 mx-auto flex gap-3 ">
      <div className="flex flex-col justify-evenly gap-3 m-5">
        <h1 className="text-2xl font-bold text-secondary">{name}</h1>
        <a href={social} target="_blank" className="link link-primary">
          Instagram
        </a>

        {description && (
          <p>
            <span className="font-semibold">Blurb:</span> {description}
          </p>
        )}
        {venue && (
          <p>
            <span className="font-semibold">Venue:</span> {venue}
          </p>
        )}
        {currentDate < eventDate && (
          <p>
            <span className="font-semibold">Next Date:</span> {date}
          </p>
        )}
        {time && (
          <p>
            <span className="font-semibold">Time:</span> {time}
          </p>
        )}
        {weekday && (
          <p>
            <span className="font-semibold">Day of the Week:</span> {weekday}
          </p>
        )}
        {price && (
          <p>
            <span className="font-semibold">Sign up price/Drink Minimum:</span>{" "}
            {price}
          </p>
        )}
        {setTime && (
          <p>
            <span className="font-semibold">Set time:</span> {setTime}
          </p>
        )}
        {recurring && (
          <p>
            <span className="font-semibold">Recurring:</span>
            {recurring}
          </p>
        )}
        {categories && <p>{categories}</p>}
        <Link to={`/mics/${id}/edit`}>
          <button className="btn btn-outline btn-secondary  ">
            Edit Details
          </button>
        </Link>
      </div>
      <div id="map" className="min-h-[80vh] min-w-[30vw]">
        this is where the map should show
      </div>
    </main>
  );
};

export default SingleMic;
