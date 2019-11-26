import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      brand:"Ford",
      color:"red",
      year:1990
    };
  }

  render()
  {
    return(
      <div>
        <h1>{this.state.brand}</h1>
        <h1>{this.state.color}</h1>
        

      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
