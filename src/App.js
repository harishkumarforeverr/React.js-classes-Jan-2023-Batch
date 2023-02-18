import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { getAllUsersHandler } from "./component/axios/CurdOperation";
import Dummy from "./Dummy";
import { useLocation, useNavigate } from "react-router-dom";
const Java = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Java</h1>
      <button
        onClick={() => {
          navigate("/hello", { state: { updatingType: "dashboardprofile" } });
        }}
      >
        route{" "} 
      </button>
    </div>
  );
};
const Hello = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      Hello  {state.updatingType}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        goBack{" "}
      </button>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <Routes> 
        <Route path={"/"} element={<h1>hello world</h1>} />
        <Route path={"/hello"} element={<Hello  />} />
        <Route path={"/java"} element={<Java />} />
        <Route path={"/javascript"} element={<h1>hello javascript</h1>} />
      </Routes>
    </div>
  );
};
 
export default App;
