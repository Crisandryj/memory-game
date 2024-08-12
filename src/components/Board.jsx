import Image from "./Images";
import { useState, useEffect } from "react";

function Board(props) {
  const [array, setArray] = useState(props.pokemon);
  useEffect(() => {
    setArray(props.pokemon);
  }, [props.pokemon]);

  return (
    <div className="images">
      {props.pokemon.map((pokemon) => {
        return (
          <button onClick={props.onClick} key={pokemon.id}>
            <Image name={pokemon.name} key={pokemon.id} />
          </button>
        );
      })}
    </div>
  );
}

export default Board;
