import React, { Component } from 'react';
import MasterButton from '../MasterButton';
import Fighter from '../Fighter';
import { pickRandomFighter } from './helpers';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fighter: null,
    };

    this.pickFighter = this.pickFighter.bind(this);
  }

  pickFighter() {
    this.setState({
      fighter: pickRandomFighter(),
    });
  }

  render() {
    const { fighter } = this.state;
    return (
      <div className="App">
        {fighter ? <Fighter fighter={fighter} pickFighter={this.pickFighter} /> : null}
        {fighter ? null : <MasterButton pickFighter={this.pickFighter} />}
      </div>
    );
  }
}

export default App;
