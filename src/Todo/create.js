import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { v4 as uuidv4 } from "uuid";
// {
//   name: "harish",
//   job: "react.js",
//   id: uuidv4(),
//   age: "22",
// },
const CreateTodo = () => {
  const [data, setData] = useState({
    name: "",
    job: "",
    age: "",
  });
  const navigate = useNavigate();
  const handlerTheInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const submit=()=>{
    const updatedUser={
      ...data, id: uuidv4(),
    }
    console.log("datadatadata",updatedUser);
    // navigate("/");
  }
  return (
    <div>
      <h1>create Todo</h1>
      <h1>
        {" "}
        name :{" "}
        <input
          name="name"
          value={data.name}
          onChange={handlerTheInputChange}
          placeholder="enter your name"
        />
      </h1>
      <h1>
        {" "}
        age :{" "}
        <input
          name="age"
          value={data.age}
          placeholder="enter your age"
          onChange={handlerTheInputChange}
        />
      </h1>
      <h1>
        {" "}
        role :{" "}
        <input
          name="job"
          value={data.job}
          placeholder="enter your role"
          onChange={handlerTheInputChange}
        />
      </h1>
      <button
        onClick={submit}
      >
        Save
      </button>
    </div>
  );
};
export default CreateTodo;
