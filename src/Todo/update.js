import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.scss";
import { v4 as uuidv4 } from "uuid";
// {
//   name: "harish",
//   job: "react.js",
//   id: uuidv4(),
//   age: "22",
// },
const UpdateTodo = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const dispatch=useDispatch();
  console.log("location", location);
  useEffect(() => {
    setData(location.state);
  }, [location]);
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
  const submit = () => {
    const updatedUser = {
      ...data,
    }; 
    dispatch({
      type:"UPDTAE_TODO",
      payload:updatedUser
    })
    navigate("/")

  };
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
      <button onClick={submit}>Save</button>
    </div>
  );
};
export default UpdateTodo;
