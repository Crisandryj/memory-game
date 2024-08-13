import Image from "./Images";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Board(props) {
  return (
    <div className="images">
      {props.arry.map((pokemon) => {
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
