import { useState, useEffect } from "react";

function Image(urlPokeName) {
  const [pokemon, setPokemon] = useState({ img: "", name: "" });
  const [urlName, setUrlName] = useState(urlPokeName);
  //urlPoke prop not working
  fetch(`https://pokeapi.co/api/v2/pokemon/${urlName}`).then((reponse) =>
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
    <div className="pokemon">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.img} alt="" />
    </div>
  );
}

export default Image;
