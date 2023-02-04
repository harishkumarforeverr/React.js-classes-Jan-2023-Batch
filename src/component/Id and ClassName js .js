import React, { useState, useEffect } from "react"; 
import "./App.scss";

const App = () => {
  // const myname = document.getElementById("name");
  // console.log(myname.innerHTML, (myname.style.color = "red"));
  const myname = document.getElementsByClassName("age");
  console.log(myname)
  // console.log(myname[0].innerHTML, (myname[0].style.color = "red"));
  // console.log(myname[1].innerHTML, (myname[1].style.color = "green"));
  return (
    <div>
      <h1 id="name">harish</h1>
      <h1 className="age">22</h1>
      <h1 className="age">12</h1>
    </div>
  );
};
export default App;
