import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import "./App.scss";
const App = () => {
  const arr = [1, 2, 3, 4, "harish", false, { name: "33" }];
  console.log(arr[4]);
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};
export default App;
