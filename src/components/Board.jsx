import Image from "./Images";

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
