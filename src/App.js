import "./App.css";
import Navigation from "./components/Navigation";
import { useState } from "react";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Trailer from "./components/Trailer";
import RandoList from "./components/RandoList";
import NouvelleRando from "./components/NouvelleRando";
import NewTrailler from "./components/NewTrailler";
import Slide from "./components/Slide";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Carousels from "./components/Carousels";

function App() {
  const [newRando, setNewRando] = useState([
    {
      name: " Mahdia (sous-marin) ",
      posterurl:
        "https://www.sportsnature.org/wp-content/uploads/2018/11/randonnee-palmee.jpg",
      description:
        "découvrir le monde sous-marin, sa faune, sa flore, sa beauté, son univers particulier à Mahdia. ",
      rating: 5,
      program:
        " Date: 26/06/2022 🔖 NB: Groupe respectueux et familial 📑Programme : 👬 06h00 : Rassemblement devant kiosque Agil TGM 🚌 06h30 : Départ vers mahdia 🏞 10h00 : Arrivée à la plage et temps libre ",
    },
    {
      name: " Bizerte(Mersa Dhouiba) ",
      posterurl:
        "https://www.kharjet.tn/wp-content/uploads/2019/05/Baignade-Cap-Farina.jpg",
      description: "C'est l'une des meilleures plages sauvages en Tunisie",
      rating: 5,
      program:
        "Date: 26/06/2022 🔖 NB: Groupe respectueux et familial 📑Programme : 👬 06h00 : Rassemblement devant kiosque Agil TGM 🚌 06h30 : Départ vers mahdia 🏞 10h00 : Arrivée à la plage et temps libre ",
    },
  ]);

  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  return (
    <>
      <div className="App">
        <Navigation setText={setText} setRating={setRating} />

        <Routes>
          <Route path="/" element={<RandoList text={text} rating={rating} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/nouvelleRando"
            element={
              <NouvelleRando newRando={newRando} setNewRando={setNewRando} />
            }
          />

          <Route
            path="/slide"
            element={<Slide newRando={newRando} setNewRando={setNewRando} />}
          />

          <Route path="/Trailer/:name" element={<Trailer />} />
          <Route
            path="/NewTrailler/:name"
            element={<NewTrailler newRando={newRando} />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
