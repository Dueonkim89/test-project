import React, { Component } from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Tabs />
      </div>
    );
  }
}

export default App;
