import React, { Component } from 'react';
import MasterButton from '../MasterButton';
import { pickRandomFighter } from './helpers';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MasterButton pickFighter={pickRandomFighter} />
      </div>
    );
  }
}

export default App;
