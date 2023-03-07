import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { CounterProvider, CounterContext } from "./Context";

// https://codesandbox.io/s/m4r124zkpj?file=/src/App.js
function Counter() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <h5>Count: {state.count}</h5>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

function Testinjo() {
  const { state } = useContext(CounterContext);

  return (
    <div>
      <h1>{state.username}</h1>
    </div>
  );
}

function ReactHooksStoresExample() {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
        <Testinjo />
      </CounterProvider>
    </div>
  );
}

export default ReactHooksStoresExample;
