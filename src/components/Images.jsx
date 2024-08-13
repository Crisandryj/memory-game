import { useState, useEffect } from "react";

function Image(props) {
  const [pokemon, setPokemon] = useState({ img: "", name: "" });
  const [urlName, setUrlName] = useState(props.name);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${urlName}`).then((reponse) =>
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
  }, [pokemon]);

  return (
    <div className="pokemon">
      <h2>{urlName}</h2>
      <img src={pokemon.img} alt="" />
    </div>
  );
}

export default Image;
