import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorCard from "./AuthorCard";

export default function PopularAuthors() {
  const [popAuthors, setPopAuthors] = useState(undefined);
  useEffect(() => {
    axios
      .get("https://good-reads-server.herokuapp.com/user/authors/popular")
      .then(function (response) {
        setPopAuthors(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  if (popAuthors)
    return (
      <div
        id="carouselExampleFade3"
        className="carousel slide carousel-fade col-3 "
        data-bs-ride="carousel"
        style={{ width: "30%" }}
      >
        <div class="carousel-indicators">
          <button
            style={{ backgroundColor: "black" }}
            type="button"
            data-bs-target="#carouselExampleFade3"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            style={{ backgroundColor: "black" }}
            type="button"
            data-bs-target="#carouselExampleFade3"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            style={{ backgroundColor: "black" }}
            type="button"
            data-bs-target="#carouselExampleFade3"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          {popAuthors.map((author) => {
            return (
              <AuthorCard
                author={author}
                isFirst={popAuthors[0] === author ? true : false}
              />
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade3"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade3"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
}
