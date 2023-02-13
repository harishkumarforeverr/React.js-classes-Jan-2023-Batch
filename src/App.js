import React, { useState, useCallback, useEffect } from "react";
import "./App.scss";
const Todos = ({ addTodo }) => {
  useEffect(() => {
    console.log("im called again");
  }, [addTodo]);
  return <h1>Hello</h1>;
};
const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };
 
  const addTodo = useCallback(() => {
    console.log("im a function");
  }, []);
  // const addTodo=() => {
  //   console.log("im a function");
  // }
  //  200 201
  // 

  return (
    <>
      <Todos addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
export default React.memo(App);
