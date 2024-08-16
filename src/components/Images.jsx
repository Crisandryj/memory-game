import { useState, useEffect } from "react";

function Image(props) {
  const [pokemon, setPokemon] = useState({ img: "", name: "" });

  function getPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`).then((reponse) =>
      reponse
        .json()
        .then((data) =>
          setPokemon({
            img: data.sprites.other["official-artwork"].front_default,
            name: data.name,
          })
        )
        .catch((err) => {
          console.log("Pokemon not found", err);
        })
    );
  }

  useEffect(() => {
    getPokemon();
  });

  return (
    <>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.img} alt="" />
    </>
  );
}

export default Image;
