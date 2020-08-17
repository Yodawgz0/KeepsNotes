import React, { Component } from "react";
import Header from "./components/Header/Header.js";
import TakeNote from "./components/TakeNote/TakeNote.js";

import "./App.css";

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <TakeNote/>
      </div>
    );
  }
}

export default App;
