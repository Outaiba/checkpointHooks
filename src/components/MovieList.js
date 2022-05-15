import React from "react";
import MovieAdd from "./MovieAdd";
import MovieCard from "./MovieCard";

function MovieList({ movies, setMovies, text, rating }) {
  return (
    <div>
      <MovieAdd movies={movies} setMovies={setMovies} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: 50,
          marginLeft: 20,
          justifyContent: "space-around",
        }}
      >
        {movies
          .filter(
            (el) =>
              el.name.toLowerCase().includes(text.toLowerCase()) &&
              el.rating >= rating
          )
          .map((el) => <MovieCard movie={el} />)
          .reverse()}
      </div>
    </div>
  );
}

export default MovieList;
