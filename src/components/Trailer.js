import React from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router";

function Trailer({ movies }) {
  const params = useParams();
  const oneMovie = movies.filter((el) => el.name == params.name)[0];

  return (
    <div>
      <img
        src={oneMovie.posterurl}
        style={{ display: "block", margin: "0 auto", width: "60%" }}
      ></img>
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          width: "80%",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "justify",
        }}
      >
        <h1>{oneMovie.description}</h1>
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          value={oneMovie.rating}
          edit={false}
        />
      </div>
    </div>
  );
}

export default Trailer;
