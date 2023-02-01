import React, { useState, useCallback, useEffect, useMemo } from "react";
import "./App.scss";
import MemoizedMovie from "./component/Memo";

const App = () => {
  const [title, setTitle] = useState("title1234");
  const handleTheTitle = () => {
    setTitle(Math.random());
  };
  return (
    <>
      <button onClick={handleTheTitle}>change 1st title</button>
      <MemoizedMovie title={title} releaseDate={"releaseDate123"} />
      <MemoizedMovie title={"title456"} releaseDate={"releaseDate456"} />
    </>
  );
};
export default React.memo(App);
