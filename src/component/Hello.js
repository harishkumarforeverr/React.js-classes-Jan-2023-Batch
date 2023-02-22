import React,{useState} from "react";
const Hello = (props) => { 
  const [name,setName]=useState(props.Appname);
  const handler=(arg)=>{
    setName("kalyan");
  }
  return (
    <div>
      <h1>  hello component {name} {props.age} </h1>
      <button onClick={handler}>click me</button>
      {/* <button onClick={()=>{
        handler("sjsnjsbhbshsbvgsv")
      }}>click me</button> */}
    </div>
  );
};

export default Hello;
