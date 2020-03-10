import React, { Component } from "react";
import Userlist from "./components/Userlist";
import Feedlist from "./components/Feedlist";

class App extends Component {
  render() {
    return (
      <>
        <Userlist></Userlist>
        <Feedlist></Feedlist>
      </>
    );
  }
}

export default App;
