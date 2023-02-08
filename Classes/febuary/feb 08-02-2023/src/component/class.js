import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import "./App.scss";
import MemoizedMovie from "./component/Memo";
class Car extends React.Component {
  // constructor() {
  //   super();
  //   this.state = { color: "red" };
  // }
  // render() {
  //   return <h2>I am a Car! {this.state.color} </h2>;
  // }
  constructor() {
    super();
    this.state = { color: "red" };
  }
  componentDidMount() {
    console.log("component is mouhnted");
  }
  componentDidUpdate() {
    console.log("componenet is updated");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    // return true;
    return false;
  }
  handleTheAdd = () => {
    this.setState({ color: "pink" });
  };
  render() {
    return (
      <div>
        <h2>I am a Car! {this.state.color} </h2>
        <button onClick={this.handleTheAdd}>Add</button>
      </div>
    );
  }
}
const App = () => {
  return <Car />;
};
export default App;
