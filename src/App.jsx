import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Image from "./components/Images";
const pokemonArray = [
  "Venusaur",
  "Charmeleon",
  "Blastoise",
  "Charizard",
  "Beedrill",
  "Arbok",
  "Raichu",
  "Fearow",
  "Clefairy",
  "Primeape",
];
//map not showing pokemon images
function App() {
  return (
    <>
      <div className="images">
        {pokemonArray.map((pokemon) => {
          <Image name={pokemon} />;
        })}
      </div>
    </>
  );
}

export default App;
