import React from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router";

function Trailer({ movies }) {
  const params = useParams();
  const oneMovie = movies.filter((el) => el.name == params.name)[0];

  return (
    <div>
      <h1
        style={{
          display: "flex",
          margin: "0 auto",
          justifyContent: "center",
          textAlign: "justify",
        }}
      >
        {oneMovie.name}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <img
          src={oneMovie.posterurl}
          style={{
            width: "400px",
            height: "300px",
            borderRadius: "25px",
            marginTop: "20px",
          }}
        ></img>
        <img
          src={oneMovie.posterurl1}
          style={{
            width: "400px",
            height: "300px",
            borderRadius: "25px",
            marginTop: "20px",
          }}
        ></img>
        <img
          src={oneMovie.posterur2}
          style={{
            width: "400px",
            height: "300px",
            borderRadius: "25px",
            marginTop: "20px",
          }}
        ></img>
        <img
          src={oneMovie.posterurl3}
          style={{
            width: "400px",
            height: "300px",
            borderRadius: "25px",
            marginTop: "20px",
          }}
        ></img>
        <img
          src={oneMovie.posterurl4}
          style={{
            width: "400px",
            height: "300px",
            borderRadius: "25px",
            marginTop: "20px",
          }}
        ></img>
        <img
          src={oneMovie.posterurl5}
          style={{
            width: "400px",
            height: "300px",
            borderRadius: "25px",
            marginTop: "20px",
          }}
        ></img>
      </div>
      <div style={{ marginTop: "30px" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PUQG9kRNXCk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

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
