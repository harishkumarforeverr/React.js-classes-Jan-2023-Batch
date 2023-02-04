import React, { useState, useEffect } from "react";
const getDate = () => {
  return [
    {
      name: "harish",
      age: "21",
    },
    {
      name: "shiva",
      age: "18",
    },
    {
      name: "chandana",
      age: "19",
    },
    {
      name: "kaylan",
      age: "21",
    },
    {
      name: "sharyana",
      age: "16",
    },
  ];
};
const ReactUseEffct = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    const res = getDate();
    setData(res);
    setCount(res.length);
  }, []);
  useEffect(() => {
    const res = getDate();
    const newData=res.slice(0,count);
    setData(newData);
    setCount(newData);
  }, [count]);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setCount(2);
          }}
        >
          show 2 record
        </button>
        <button
          onClick={() => {
            setCount(3);
          }}
        >
          show 3 record
        </button>
      </div>
      {data.map((obj) => {
        return (
          <div>
            <h1>name:{obj.name}</h1>
            <h1>age:{obj.age}</h1>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default ReactUseEffct;

// map  and destrcuting
