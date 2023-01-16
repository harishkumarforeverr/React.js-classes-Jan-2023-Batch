import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import "./App.scss";
import Dummy from "./Dummy";
const App = () => {
  function name(a) {
    console.log(a);
  }
  name(10);

  return (
    <div>
      {/* <h1><p><span><a>dddddddddddddddd</a></span></p></h1> */}
      <Dummy />
    </div>
  );
};
export default App;
