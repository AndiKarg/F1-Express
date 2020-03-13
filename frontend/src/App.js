import React, { Component } from "react";
import Login from "./components/Login";
import Racerlist from "./components/Racerlist";
import DnD from "./components/DndExample";
import "./css/App.css";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

export default class App extends Component {
  state = {
    login: false
  };

  componentDidMount() {
    //Loginstate global ziehen (z.B. aus LocalStorage etc)
  }

  handleLogin = () => {
    this.setState({ login: true });
  };

  render() {
    const login = this.state.login;
    return (
      <>
        {login ? (
          <>
            <DndProvider backend={Backend}>
              <DnD></DnD>
            </DndProvider>
            <Login></Login>
            <Racerlist></Racerlist>
          </>
        ) : (
          <button onClick={this.handleLogin}>Bitte einloggen!</button>
        )}
      </>
    );
  }
}
