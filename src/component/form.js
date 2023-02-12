import React, { useState, useEffect, useRef } from "react";
import "./App.scss";

const App = () => {
  const [data, setData] = useState({ name: "", age: "" });
  const handleTheSubmit = (e) => {
    e.preventDefault();
    console.log("im clicked",data);
    
  };
  return (
    <div> 
      <form onSubmit={handleTheSubmit}>
        <label> name</label>
        <input
          value={data.name}
          onChange={(e) => {
            const { value } = e.target;
            setData((prev) => ({ ...prev, name: value }));
          }}
          type="text"
          name="name"
        />
        <label> age</label>
        <input
          onChange={(e) => {
            const { value } = e.target;
            setData((prev) => ({ ...prev, age: value }));
          }}
          value={data.age}
          type="number"
          name="age"
        />
        <button type="submit"> submit</button>
      </form>
     
    </div>
  );
};
export default App;
