import React, { Component } from "react";

export default class Racerlist extends Component {
  state = {
    loading: true,
    racers: []
  };

  componentWillMount() {
    fetch("http://ergast.com/api/f1/2019/drivers.json")
      .then(response => response.json())
      .then(response =>
        this.setState({
          racers: response.MRData.DriverTable.Drivers,
          loading: false
        })
      );
  }

  componentDidMount() {
    //leer
  }

  render() {
    let loading = this.state.loading;
    let racers = this.state.racers;
    console.log(racers);
    return (
      <>
        <h1>Racerlist</h1>
        <p>Alle Racer!</p>
        <div className="racerlist">
          {loading ? (
            <h3>Ergebnisse werden geladen...</h3>
          ) : (
            racers.map(r => (
              <div className="driver" key={r.position}>
                <div
                  style={{
                    background: `url(
                    ../../assets/img/f1drivers/${r.permanentNumber}.png
                  ) center / contain`,
                    height: "200px",
                    width: "200px"
                  }}
                  className="driverpic"
                ></div>
                {`${r.givenName} von ${r.familyName}`}
              </div>
            ))
          )}
        </div>
        <style jsx>{`
          .racerlist {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
          }

          .driver {
            transition: all 1s ease-in-out;
            border: solid 1px whitesmoke;
            margin: 0.5rem;
            padding: 0.5rem;
            width: max-content;
          }

          .driver:hover {
            color: red;
            cursor: pointer;
          }
        `}</style>
      </>
    );
  }
}
