import React, { Component } from "react";

export default class App extends Component {
  state = {
    loading: true,
    feed: []
  };

  componentDidMount() {
    fetch("http://localhost:4000/feed")
      .then(response => response.json())
      .then(response => {
        console.log("DATA:", response.data);
        this.setState({ loading: false, feed: response.data });
      });
  }

  render() {
    const feed = this.state.feed;
    const loading = this.state.loading;
    return (
      <>
        <div className="Feed">
          <h3>Feed!</h3>
          <ul>
            {loading ? (
              <h3>Loading...</h3>
            ) : (
              feed.map(f => (
                <li key={f.feed_id}>
                  {f.feed_id}_{f.corefeed}
                </li>
              ))
            )}
          </ul>
        </div>
      </>
    );
  }
}
