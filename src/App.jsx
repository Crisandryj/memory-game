import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Image from "./components/Images";
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

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function App() {
  const [array, setArray] = useState(pokemonArray);

  const onClick = () => {
    setArray(shuffleArray(pokemonArray));
  };

  return (
    <>
      <div className="images">
        {pokemonArray.map((pokemon) => {
          return (
            <button onClick={onClick} key={pokemon.id}>
              <Image name={pokemon.name} key={pokemon.id} />
            </button>
          );
        })}
      </div>
    </>
  );
}

export default App;
