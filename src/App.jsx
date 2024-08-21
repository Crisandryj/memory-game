import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board";
import { v4 as uuidv4 } from "uuid";
import Score from "./components/Score";

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
  { name: "ninetales", id: uuidv4() },
  { name: "butterfree", id: uuidv4() },
  { name: "ekans", id: uuidv4() },
  { name: "pidgeotto", id: uuidv4() },
  { name: "weedle", id: uuidv4() },
  { name: "nidoking", id: uuidv4() },
  { name: "sandshrew", id: uuidv4() },
  { name: "nidoqueen", id: uuidv4() },
  { name: "venonat", id: uuidv4() },
  { name: "jigglypuff", id: uuidv4() },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function App() {
  const [arry, setArry] = useState(pokemonArray);
  let [count, setCount] = useState(0);
  const [source, setSource] = useState([]);
  const [score, setScore] = useState(0);
  const [showGame, setShowGame] = useState("false");

  const handleStartGameClick = () => {
    setShowGame(true);
  };

  const onClick = (e) => {
    e.preventdefault;
    if (e.target.matches("img")) {
      setArry(shuffleArray([...pokemonArray]));
      setSource([...source, e.target.src]);

      //track score of consecutive clicks without repeating pokemon
      if (source.includes(e.target.src)) {
        setCount(0);
        setSource([]);
        if (count > score) {
          setScore(count);
        }
      } else {
        setCount((count += 1));
        console.log(source);
      }
    }
  };

  if (showGame == true) {
    return (
      <div className="container">
        <Score count={count} score={score}></Score>
        <Board pokemon={pokemonArray} onClick={onClick} arry={arry} />
      </div>
    );
  } else {
    return (
      <>
        <h1>WELCOME TO THE MEMORY GAME</h1>
        <p>
          The task is simple. Select as many pokemon as you can without
          repeating a previous selection. Can you get all 20?
        </p>
        <p>Count will restart when selection repeated.</p>
        <p>Good Luck!</p>
        <button id="start" onClick={handleStartGameClick}>
          Start Game
        </button>
      </>
    );
  }
}

export default App;
