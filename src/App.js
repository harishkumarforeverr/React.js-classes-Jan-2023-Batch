import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";  
import CreateTodo from "./Todo/create";
import UpdateTodo from "./Todo/update";
import Todo from "./Todo"
import NotFoundPage from "./Todo/NotFounPage"; 
// https://www.npmjs.com/package/redux
// https://github.com/reduxjs/redux-devtools/tree/main/extension#installation
// https://react-redux.js.org/introduction/getting-started
const App = () => {
  return (
    <div> 
      <Routes> 
        <Route path={"/"} element={<Todo />} />
        <Route path={"/create"} element={<CreateTodo  />} />
        <Route path={"/update"} element={<UpdateTodo />} />
        <Route path={"/*"} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
 
export default App;
