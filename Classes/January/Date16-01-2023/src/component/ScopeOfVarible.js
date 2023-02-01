import React from "react";
import "./App.scss";

const App = () => {
  // ###################### var
  // block level scope
  // const f1 = () => {
  //   let no = 20;
  //   if (no > 10) {
  //     var a = 10;
  //     // a = 20;
  //     console.log(a);
  //   }
  //   console.log(a);
  // };

  // f1();

  // functional scope
  // const f1 = () => {
  //   let no = 20;
  //   if (no > 10) {
  //     var a = 10;
  //     // a = 20;
  //     console.log(a);
  //   }
  // };

  // console.log(a);
  // f1();

  // ###################### let
  // block level scope
  // const f1 = () => {
  //   let no = 20;
  //   if (no > 10) {
  //     let a = 10;
  //     a = 20; // we can reassign the varibles
  //     console.log(a);
  //   }
  //   console.log(a);
  // };

  // f1();

  // // functional scope
  // const f1 = () => {
  //   let no = 20;
  //   if (no > 10) {
  //     let a = 10;
  //     // a = 20;
  //     console.log(a);
  //   }
  //   // console.log(a);
  // };

  // // console.log(a);
  // f1();

  // ###################### const
  // block level scope
  // const f1 = () => {
  //   let no = 20;
  //   if (no > 10) {
  //     const a = 10;
  //     // a = 20;
  //     console.log(a);
  //   }
  //   console.log(a);
  // };

  // f1();

  // // functional scope
  // const f1 = () => {
  //   let no = 20;
  //   if (no > 10) {
  //     const a = 10;
  //     // a = 20; // we cannot reassign
  //     console.log(a);
  //   }
  // };

  // console.log(a);
  // f1();
  return <div></div>;
};
export default React.memo(App);
