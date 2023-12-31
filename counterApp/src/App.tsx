import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count -1);
  };
  const reset = () => {
    setCount( 0)
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increse</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrese</button>
    </>
  );
}

export default App;
