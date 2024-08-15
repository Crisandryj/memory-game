import { useState } from "react";

function Score(props) {
  return (
    <div className="scoreboard">
      <h1>SCOREBOARD</h1>
      <h2>Count: {props.count}</h2>
      <h2>Best Score: {props.score}</h2>
    </div>
  );
}

export default Score;
