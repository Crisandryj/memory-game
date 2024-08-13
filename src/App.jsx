import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./components/Board";
import { v4 as uuidv4 } from "uuid";

const pokemonArray = [
  { name: "venusaur", id: uuidv4() },
  { name: "charmeleon", id: uuidv4() },
  { name: "blastoise", id: uuidv4() },
  { name: "charizard", id: uuidv4() },
  { name: "beedrill", id: uuidv4() },
  { name: "arbok", id: uuidv4() },
  { name: "raichu", id: uuidv4() },
  { name: "fearow", id: uuidv4() },
  { name: "clefairy", id: uuidv4() },
  { name: "primeape", id: uuidv4() },
];

function App() {
  return (
    <>
      <Board pokemon={pokemonArray} />
    </>
  );
}

export default App;
