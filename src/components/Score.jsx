import { useState } from "react";

function Score(props) {
  return (
    <>
      <h2>Count: {props.count}</h2>
      <h2>Best Score: {props.score}</h2>
    </>
  );
}

export default Score;
