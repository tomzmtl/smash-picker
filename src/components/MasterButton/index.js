import React, { Component } from 'react';
import './styles.css';


class MasterButton extends Component {
  render() {
    return (
      <div className="MasterButton" onClick={this.props.pickFighter} />
    );
  }
}

export default MasterButton;
