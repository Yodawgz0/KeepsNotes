import React, { Component } from "react";
import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";

import "./App.css";

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Sidebar/>
      </div>
    );
  }
}

export default App;
