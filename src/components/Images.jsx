import { useState, useEffect } from "react";

function Image() {
  const [pokemon, setPokemon] = useState({ img: "", name: "" });
  const urlPokeName = "ditto";

  fetch(`https://pokeapi.co/api/v2/pokemon/${urlPokeName}`).then((reponse) =>
    reponse
      .json()
      .then(
        (data) => (
          setPokemon({
            img: data.sprites.other["official-artwork"].front_default,
            name: data.name,
          }),
          (pokemonName = data.name)
        )
      )
      .catch((err) => {
        console.log("Pokemon not found", err);
      })
  );

  return (
    <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.img} alt="" />
    </>
  );
}

export default Image;
