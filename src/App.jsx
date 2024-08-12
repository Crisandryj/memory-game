import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Image from "./components/Images";
import { v4 as uuidv4 } from "uuid";

const pokemonArray = [
  { name: "venusaur", id: uuidv4() },
  {name:"charmeleon", id: uuidv4() }
  {name:"blastoise", id: uuidv4() },
  {name:"charizard", id: uuidv4() },
  {name:"beedrill", id: uuidv4() },
  {name:"Arbok", id: uuidv4() },
  {name:"Raichu", id: uuidv4() },
  {name:"Fearow", id: uuidv4() },
  {name:"clefairy", id: uuidv4() },
  {name:"primeape", id: uuidv4() }
];

function App() {
  return (
    <>
      <div className="images">
        {pokemonArray.map((pokemon) => {
          return <Image name={pokemon.name} key={pokemon.id}/>;
        })}
      </div>
    </>
  );
}

export default App;
