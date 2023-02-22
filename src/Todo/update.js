import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const UpdateTodo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>update Todo</h1>
      <h1>
        {" "}
        name : <input placeholder="enter your name" value={"harish"} />
      </h1>
      <h1>
        {" "}
        age : <input placeholder="enter your age" value={22} />
      </h1>
      <h1>
        {" "}
        role : <input placeholder="enter your name" value={"react"} />
      </h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Save
      </button>
    </div>
  );
};
export default UpdateTodo;
