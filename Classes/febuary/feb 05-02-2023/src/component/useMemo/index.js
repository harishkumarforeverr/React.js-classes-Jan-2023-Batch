import React, { useState, useCallback, useEffect, useMemo } from "react";
import "./App.scss";
const Todos = ({ addTodo }) => {
  useEffect(() => {
    console.log("im called again", addTodo);
  }, [addTodo]);
  return <h1>Hello</h1>;
};
const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // const addTodo = () => {
  //   console.log("im a function");
  // };

  // const addTodo = useCallback(() => {
  //   console.log("im a function");
  // }, []);

  // the useMemo will return the value which we are returning  while
  //useCallback will return the function which we wrote in useCallback 1st arugment
  const addTodo = useMemo(() => {
    return 123;
  }, []);

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
