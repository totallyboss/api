import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      test: 'hi',
      pictures: [],
    };
  };

  componentDidMount() {

    fetch('https://randomuser.me/api/?results=500')
    .then(results => {
      return results.json();
    }).then(data => {
      let picasso = data.results.map((pic) => {
        return (
          <div key={pic.results}>
            <img src={pic.picture.large}/>
          </div>
        )
      });

      this.setState({pictures: picasso});
      console.log("state", this.state.pictures);
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.pictures}
      </div>
    );
  };
};

export default App;
