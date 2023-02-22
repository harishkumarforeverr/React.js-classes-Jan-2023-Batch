import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const CreateTodo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>create Todo</h1>
      <h1>
        {" "}
        name : <input placeholder="enter your name" />
      </h1>
      <h1>
        {" "}
        age : <input placeholder="enter your age" />
      </h1>
      <h1>
        {" "}
        role : <input placeholder="enter your name" />
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
export default CreateTodo;
