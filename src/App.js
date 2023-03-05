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
    {/* store ==> { view="home", show:true} */}
      <Routes> 
        <Route path={"/"} element={<Todo  />} /> 
        {/* // view="home" show="true"  */}
        <Route path={"/create"} element={<CreateTodo  />} /> 
        {/* // view="home" show="true"  */}
        <Route path={"/update"} element={<UpdateTodo />} />
        <Route path={"/*"} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
 
export default App;
