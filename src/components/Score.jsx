import { useState } from "react";

function Score(onClick) {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}

export default Score;
