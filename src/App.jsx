import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Image from "./components/Images";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="images">
        <Image />
        <Image />
      </div>
    </>
  );
}

export default App;
