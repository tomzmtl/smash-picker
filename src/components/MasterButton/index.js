import React, { Component } from 'react';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="MasterButton" onClick={this.props.pickFighter} />
    );
  }
}

export default App;
