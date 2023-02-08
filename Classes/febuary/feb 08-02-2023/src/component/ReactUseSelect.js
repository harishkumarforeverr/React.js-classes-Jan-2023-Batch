///OBJECT

// import React, { useState } from "react";
// import "./ReactUseSelect.scss";

// const ReactUseSelect = () => {
//   const [obj, setObj] = useState({ name: "harish", age: 22 });
//   const updateWrong = () => {
//     setObj({
//       name: "kalyan",
//     });
//   };
//   const updateRight = () => {
//     setObj({
//       name: "kalyan",
//       age: 21,
//     });
//   };
//   const simpleUpdate = () => {
//     setObj((prev) => {
//       return {
//         ...prev,
//         name: "rahul",
//       };
//     });
//   };
//   return (
//     <div>
//       <h1>name: {obj.name}</h1>
//       <h1>age: {obj.age}</h1>
//       <button onClick={updateWrong}>update Wrong</button>
//       <button onClick={updateRight}>Right update</button>
//       <button onClick={simpleUpdate}>acquare update</button>
//     </div>
//   );
// };
// export default ReactUseSelect;
// ###################### ###################### ###################### ###################### ######################
// /// boolean
// import React, { useState } from "react";
// import "./ReactUseSelect.scss";

// const ReactUseSelect = () => {
//   const [Bool, setBool] = useState(false);
//   // const updateWrong = () => {
//   //   setBool({
//   //     name: "kalyan",
//   //   });
//   // };
//   const show = () => {
//     setBool(true);
//   };
//   const hide = () => {
//     setBool(false);
//   };
//   const toogle = () => {
//     setBool((prev) => {
//       return !prev;
//     });
//   };
//   return (
//     <div>
//       {/* // case 1 */}
//       {Bool == true && <h1>okkkk</h1>}

//       {Bool == false && <h1>hidding me</h1>}

//       {/* case 2 */}
//       {Bool == true ? <h1>showing me</h1> : <h1>hidding me</h1>}
//       <button onClick={show}>show</button>
//       <button onClick={hide}> hide</button>
//       <button onClick={toogle}>toogle</button>
//     </div>
//   );
// };
// export default ReactUseSelect;

// ###################### ###################### ###################### ###################### ######################
// numbers

// import React, { useState } from "react";
// import "./ReactUseSelect.scss";

// const ReactUseSelect = () => {
//   const [No, setNo] = useState(1);
//   // const updateWrong = () => {
//   //   setNo({
//   //     name: "kalyan",
//   //   });
//   // };
//   const increment = () => {
//     setNo(No + 1);
//   };
//   const decrement = () => {
//     setNo(No - 1);
//   };
//   const incrementThree = () => {
//     setNo(No + 1);
//     setNo(No + 1);
//     setNo(No + 1);
//     setNo(No + 1);
//   };
//   const decrementFour = () => {
//     setNo(No - 1);
//     setNo(No - 1);
//     setNo(No - 1);
//     setNo(No - 1);

//     // same apply for boolean object string or ant=ything keep in the mind
//   };
//   const incrementOne = () => {
//     setNo((prev) => {
//       return prev + 1;
//     });
//   };
//   const incrementByGivenNo = (argNo) => {
//     setNo((prev) => {
//       return prev + argNo;
//     });
//   };
//   return (
//     <div>
//       {/* // case 1 */}
//       {No == 1 && <h1>one</h1>}

//       {No == 2 && <h1>two</h1>}

//       {/* case 2 */}
//       {No == 3 ? <h1>showing me</h1> : <h1>hidding me</h1>}
//       <button onClick={increment}>update Wrong 1</button>
//       <button onClick={decrement}>update wrong 2</button>
//       <button onClick={incrementThree}>update Wrong 3</button>
//       <button onClick={decrementFour}>update wrong 4</button>
//       <button onClick={incrementOne}>incrementOne</button>
//       <button
//         onClick={() => {
//           incrementByGivenNo(10);
//         }}
//       >
//         incrementByGivenNo
//       </button>
//     </div>
//   );
// };
// export default ReactUseSelect;
// ###################### ###################### ###################### ###################### ######################

// ###################### ###################### ###################### ###################### ######################
// / string

// import React, { useState } from "react";
// import "./ReactUseSelect.scss";

// const ReactUseSelect = () => {
//   const [Str, setStr] = useState("");

//   const Update = () => {
//     setStr("one");
//   };
//   const updateTwo = () => {
//     setStr("two");
//   };
//   const UpdateThree = () => {
//     setStr("one");
//     setStr("two");
//     setStr("one");
//     setStr("three");
//   };

//   // const UpdateOne = () => {
//   //   setStr((prev) => {
//   //     return prev + 1;
//   //   });
//   // };
//   const UpdateByGivenStr = (argStr) => {
//     setStr(argStr);
//   };
//   return (
//     <div>
//       {/* // case 1 */}
//       {Str == "one" && <h1>one</h1>}
//       {Str == "two" && <h1>two</h1>}
//       {/* case 2 */}
//       {Str == "three" ? <h1>showing me</h1> : <h1>hidding me</h1>}
//       <button onClick={Update}>update to One</button>
//       <button onClick={updateTwo}>update 2</button>
//       <button onClick={UpdateThree}>update Wrong 3</button>
//       <button
//         onClick={() => {
//           UpdateByGivenStr("three");
//         }}
//       >
//         UpdatetoGivenStr
//       </button>{" "}
//       <button
//         onClick={() => {
//           UpdateByGivenStr("ssss");
//         }}
//       >
//         UpdatetoGivenStr
//       </button>
//     </div>
//   );
// };
// export default ReactUseSelect;
