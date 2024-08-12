import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./components/Board";
import { v4 as uuidv4 } from "uuid";
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function App() {
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
  const onClick = () => {
    shuffleArray(pokemonArray);
  };

  return (
    <>
      <Board pokemon={pokemonArray} onClick={onClick} />
    </>
  );
}

export default App;

//another component that holds board
//App
//Board
//images
