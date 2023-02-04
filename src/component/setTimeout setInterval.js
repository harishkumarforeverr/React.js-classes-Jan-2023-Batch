import React, { useState, useEffect } from "react"; 
import "./App.scss";

const App = () => {
  
  // const id = setInterval(() => {
  //   console.log("nsjbsjbshvjj");
  // }, 2000);
  // //  2000
  // if (true) {
  //   clearInterval(id);
  // }
  // //  setInterval()
  // console.log(1);
  // const a = 12;
  // const sum = 12 + 90;
  // //setTimeout()
  // console.log(2);
  // //  memory  and js run
  // //  / po

   const id=setTimeout(()=>{ console.log("nsjbsjbshvjj")},2000)
  //  2000 
  if(true){
    clearTimeout()

  }
  //  setInterval()
  console.log(1);
  const a=12;
  const sum=12+90;
  //setTimeout()
  console.log(2)  
  //  memory  and js run
  //  / po
  return (
    <div>
      <h1 id="name">harish</h1>
      <h1 className="age">22</h1>
      <h1 className="age">12</h1>
    </div>
  );
};
export default App;
