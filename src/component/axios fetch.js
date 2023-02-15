import axios from "axios";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import "./App.scss";

const App = () => {
  const  [data,setData]=useState([])
  const getData=async ()=>{
    
    // const res= await axios.get("https://jsonplaceholder.typicode.com/todos/")
    // const res= await axios.delete("https://jsonplaceholder.typicode.com/todos/8")
    
    // const res= await axios.post("https://jsonplaceholder.typicode.com/todos",{name:"sss",age:"22",roll:'ddd'})
    
    // const res= await axios.put("https://jsonplaceholder.typicode.com/todos/1",{name:"bharat"})
    // setData(res.data)
  }
  useEffect(() => {
    getData()
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((json) =>setData(json) );
  }, []);
  return (
    <>
      <h1> hello world</h1>
    </>
  );
};
export default React.memo(App);
