import React, { useEffect, useState } from "react";
import "./index.scss";
import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// CRUD
const Todo = () => {
  const navigate=useNavigate(); 
  const dispatch=useDispatch();
  const state=useSelector((state)=>state);

  const deleteHandler = (index) => {  
     const updated=state.filter((obj)=>{ return  obj.id!==index}); 
      dispatch({
        type:"ADD_UPDATED_DATA",
        payload:updated
      })
  };

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
        {state.map((obj,index) => {
          return (
            <tr key={index} className="tableData">
              <td>{obj.name}</td>
              <td>{obj.age}</td>
              <td>{obj.job}</td>
              <td>
                {" "}
                <button
                  onClick={() => {
                    deleteHandler(obj.id);
                  }}
                >
                  {" "}
                  delete
                </button>
              </td>
              <td>
                {" "}
                <button
                  onClick={() => {
                    navigate("/update",{state:obj});
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
