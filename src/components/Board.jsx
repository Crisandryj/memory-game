import Image from "./Images";
import { useState, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

function Board(props) {
  const [arry, setArry] = useState([
    { name: "venusaur", id: uuidv4() },
    { name: "charmeleon", id: uuidv4() },
  ]);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  const onClick = () => {
    setArry(shuffleArray(props.pokemon));
  };

  return (
    <div className="images">
      {arry.map((pokemon) => {
        return (
          <button onClick={onClick} key={pokemon.id}>
            <Image name={pokemon.name} key={pokemon.id} />
          </button>
        );
      })}
    </div>
  );
}

export default Board;
