import React from "react";
const Hello = (props) => {
  console.log(props);
  const obb = {
    name: "ssss",
    age: 2222,
  };
  return (
    <div>
      <button
        onClick={() => {
          props.myparentFun(obb);
        }}
      >
        {" "}
        click me
      </button>
      <h1>
        {" "}
        my name : {props.myname} {props.age}
      </h1>
    </div>
  );
};

export default Hello;
