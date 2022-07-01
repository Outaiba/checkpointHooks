import React from "react";
import { useSelector } from "react-redux";
import Home from "./Home";
import MovieAdd from "./MovieAdd";
import RandoCard from "./RandoCard";

function RandoList({ text, rating }) {
  const randos = useSelector((state) => state.rando.randoList);
  console.log(randos);

  return (
    <div>
      <Home />
      <MovieAdd />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: 50,
          marginLeft: 20,
          justifyContent: "space-around",
        }}
      >
        {randos
          .filter(
            (el) =>
              el.name.toLowerCase().includes(text.toLowerCase()) &&
              el.rating >= rating
          )
          .map((el) => <RandoCard rando={el} />)
          .reverse()}
      </div>
    </div>
  );
}

export default RandoList;
