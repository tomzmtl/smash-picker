import React, { Component } from 'react';
import { getFighterImage } from './helpers';
import './styles.css';

class App extends Component {
  render() {
    const { fighter } = this.props;

    return (
      <div className="Fighter">
        <div
          className="Fighter__image"
          style={{ backgroundImage: `url(${getFighterImage(fighter)})` }}
          onClick={this.props.pickFighter}
        />
      </div>
    );
  }
}

export default App;
