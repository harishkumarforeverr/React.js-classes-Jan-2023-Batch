import React, { useEffect, useState } from "react";
 

const Count = () => {
  const [count, setCount] = useState(0);
  const updateHandler = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // 1
  };
  const updateMe = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    //4 
  };
  return (
    <>
      <div>count value: {count}</div>
      <div>
        <button onClick={updateHandler}>update</button>
        <button onClick={updateMe}>update Me</button>
      </div>
    </>
  );
};
export default Count;
