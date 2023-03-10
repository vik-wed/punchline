import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import EditMic from "./EditMic";
import { Loader } from "@googlemaps/js-api-loader";

/**
 * COMPONENT
 */
const SingleMic = () => {
  const [singleMic, setSingleMic] = useState({});
  const { id } = useParams();

  const loader = new Loader({
    apiKey: "AIzaSyAsXv0W5rjhXfN9FNP_MyvjuPtURDDLE1k",
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
      query: `${singleMic.venue}`,
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
      console.log(place);
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });
      const contentString =
        '<div id="content">' +
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
      <p>Blurb: {singleMic.description}</p>
      <p>Venue: {singleMic.venue}</p>

      <div id="map" style={{ width: "50vw", height: "50vh" }}>
        this is where the map should show
      </div>
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
