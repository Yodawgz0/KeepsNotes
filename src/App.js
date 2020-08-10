import React, { Component } from "react";
import Header from "./components/Header";

import "./App.css";

class App extends Component {

  state = {
    notes:[
      {
        id:1,
        title:'List for Grocery',
        body: 'Soya, Veggies',
      },
      {
        id:2,
        title:'take out trash',
        body: 'plastic & food',
      },
      {
        id:3,
        title:'wash table',
        body: 'colin & soap',
      },
      {
        id:4,
        title:'code keeps',
        body: 'react & less',
      },
    ]
  }
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
