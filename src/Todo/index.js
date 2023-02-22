import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
const initialData = [
  {
    name: "harish",
    job: "react.js",
    id:uuidv4(),
    age: "22",
  },
  {
    name: "kalyan",
    job: "angular.js",
    id:uuidv4(),
    age: "20",
  },
  {
    name: "dinesh",
    job: "javascript",
    id:uuidv4(),
    age: "22",
  },

  {
    name: "chandana",
    job: "python",
    id:uuidv4(),
    age: "17",
  },

  {
    name: "kumar",
    job: "react.js",
    id:uuidv4(),
    age: "22",
  },
  {
    name: "sharyana",
    job: "javascript",
    id:uuidv4(),
    age: "22",
  },

  {
    name: "shiva",
    job: "AI",
    id:uuidv4(),
    age: "22",
  },
];
const Todo = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(initialData);
  console.log(data);
  const deleteHandler=(index)=>{
  //  const updated=data.
  }
  return (
    <div>
      <div className="title">
        <h1> Todo APP</h1>
        <button
          onClick={() => {
            navigate("/create");
          }}
        >
          {" "}
          Create New Todo
        </button>
      </div>
      <table>
        <tr className="tableROw">
          <th>name</th>
          <th>age</th>
          <th>job</th>
          <th>delete Action</th>
          <th>update Action</th>
        </tr>
        {data.map((obj) => {
          return (
            <tr className="tableData">
              <td>{obj.name}</td>
              <td>{obj.age}</td>
              <td>{obj.job}</td>
              <td>
                {" "}
                <button onClick={()=>{
                  deleteHandler(obj.id)
                }}> delete</button>
              </td>
              <td>
                {" "}
                <button
                  onClick={() => {
                    navigate("/update");
                  }}
                >
                  {" "}
                  update
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Todo;
