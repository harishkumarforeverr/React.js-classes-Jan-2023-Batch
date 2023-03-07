import React, { useReducer,createContext } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const initialState = { count: 0, username: "bojan" };

const CounterContext = createContext({});

function CounterProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider };
