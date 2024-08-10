import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Image from "./components/Images";

function App() {
  return (
    <>
      <div className="images">
        <Image urlPokeName="ditto" />
      </div>
    </>
  );
}

export default App;
