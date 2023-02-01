import React, { useState } from "react";
import Child1 from "./Child1";
import userDetailContext from "./context";

export default function MyContext() {
  var [userDetails, setuserDetails] = useState({
    name: "harish",
    age: 30,
  });

  return (
    <>
      {/* <h1>This is the Parent Component</h1>
      <hr />
      <Child1 name={userDetails.name} /> */}

      {/* /// case 2 */}
      <userDetailContext.Provider value={userDetails}>
        <h1>This is the Parent Component</h1>
        <hr />
        <Child1 />
      </userDetailContext.Provider>
    </>
  );
}
