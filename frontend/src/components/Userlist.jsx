import React, { Component } from "react";

export default class App extends Component {
  state = {
    login: false,
    loading: true,
    users: []
  };

  componentDidMount() {
    fetch("http://localhost:4000/users")
      .then(response => response.json())
      .then(response => {
        console.log("DATA:", response.data);
        this.setState({ loading: false, users: response.data });
      });
  }

  handleLogin = () => {
    this.setState({ login: true });
  };

  render() {
    const users = this.state.users;
    const loading = this.state.loading;
    const login = this.state.login;
    //Ziel: abfragen ob user bereits eingeloggt, wenn nicht -> aufruf einer Login Componente ansonst Home Componente
    return (
      <>
        <div className="Userlist">
          <h3>Userlist!</h3>
          <ul>
            {login ? (
              loading ? (
                <h3>Loading...</h3>
              ) : (
                users.map(u => <li key={u.user_id}>{u.user_name}</li>)
              )
            ) : (
              <button type="button" onClick={this.handleLogin}>
                Einloggen
              </button>
            )}
          </ul>
        </div>
      </>
    );
  }
}
