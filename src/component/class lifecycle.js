import React, { useState, useCallback, useEffect, useMemo } from "react";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    console.log("im construtir")
    this.state = { color: "red" };
  }
  handle=()=>{
    this.setState({color:"red"})
  } 
  componentDidMount(){
    console.log("im a mounted")
  }
  componentWillUnmount(){
    console.log("im a unmoun")
  }
  componentDidUpdate(){
    console.log("ssss")
  }
  shouldComponentUpdate(){
    return true
  }
  render() {
    return <h2 onClick={this.handle}>I am a Car! {this.state.color}</h2>;
  }
}

export default React.memo(App);
