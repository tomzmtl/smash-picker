import React, { Component } from 'react';
import { getFighterImage } from './helpers';
import './styles.css';

class Fighter extends Component {
  render() {
    const { fighter } = this.props;

    return (
      <div className="Fighter" onClick={this.props.reset}>
        <div
          className="Fighter__image"
          style={{ backgroundImage: `url(${getFighterImage(fighter)})` }}
          onClick={this.props.pickFighter}
        />
      <div className="Fighter__name">
          {fighter.name}
        </div>
      </div>
    );
  }
}

export default Fighter;
