function Images() {
  function getPokemon(pokeName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then((reponse) =>
      reponse
        .json()
        .then((data) => console.log(data))
        .catch((err) => {
          console.log("Pokemon not found", err);
        })
    );
  }
  getPokemon("ditto");
}
