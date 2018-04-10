import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      redirects: [],
    };
  };

  componentDidMount() {
    fetch('https://api.myjson.com/bins/16a7zr')
    .then(results => {
      return results.json();
    }).then(data => {
      let rows = data.results[0].matchRules.map((redirect) => {
        return (
          <div key={redirect.name}>
            <h2>Redirect</h2>
            <p>{redirect.name}</p>
            <p>{redirect.matches[0].matchValue}</p>
            <p>{redirect.redirectURL}</p>
          </div>
        )
      });

      this.setState({redirects: rows});
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.redirects}
      </div>
    );
  };
};

export default App;
