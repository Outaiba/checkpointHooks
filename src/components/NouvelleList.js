import React from "react";
import MovieAdd from "./MovieAdd";
import NouvelleCard from "./NouvelleCard";

function NouvelleRando({ newRando, setNewRando }) {
  return (
    <div>
      <MovieAdd newRando={newRando} setNewRando={setNewRando} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: 50,
          marginLeft: 20,
          justifyContent: "space-around",
        }}
      >
        {newRando
          .filter(
            (el) =>
              el.name.toLowerCase().includes(text.toLowerCase()) &&
              el.rating >= rating
          )
          .map((el) => <NouvelleCard rando={el} />)
          .reverse()}
      </div>
    </div>
  );
}

export default NouvelleRando;
