import React, { useState, useEffect } from "react";
import "./search.css"
import Posts from './PostsComponent'
import axios from "axios";

const SearchComponent = () => {
  const [image, setImage] = useState("");
  const [photos, setPhotos] = useState([]);
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  const inputChange = (event) => {
    setImage(event.target.value);
  };

  const sendSubmit = () => {
    axios.get("https://api.unsplash.com/search/photos?per_page=20&query=" + image + "&client_id=" + CLIENT_ID)
      .then((response) => {
        setPhotos(response.data.results);
      });
  }

  return (
    <>
      <div className="app">
        <div className="search">
          <h1>Hover Here</h1>
          <div className="searchbox">
            <input
              type="text"
              name="image"
              className="search"
              placeholder="Start searching"
              onChange={inputChange}
            />
            <a type="submit" onClick={sendSubmit}><i className="fa fa-search"></i></a>
          </div>
        </div>
      </div>

      <div className="card-bg-1">
        <div className="card-list-1">
          {photos.map((image) => (
            <Posts image={image} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchComponent
