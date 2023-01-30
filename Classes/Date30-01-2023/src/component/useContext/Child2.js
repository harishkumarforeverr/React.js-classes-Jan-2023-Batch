// import React from 'react'; 

// const Child2 = ({name})=>{
// return (
// <div>
// <h1> im child 2 and im got props : {name}</h1>
// </div>
// )
// }
// export default Child2;



/// case 2
import React, { useContext } from "react";
import userDetailContext from "./context";

const Child2 = () => {
  const context = useContext(userDetailContext);
  return (
    <div>
      <h1> im child 2 and im got props : {context.name}</h1>
    </div>
  );
};
export default Child2;
