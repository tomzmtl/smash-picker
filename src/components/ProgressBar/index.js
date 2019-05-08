import React, { Component } from 'react';
import './styles.scss';

class ProgressBar extends Component {
  render() {
    return (
      <div className="ProgressBar">
        <div className="ProgressBar__progress" style={{ width: `${this.props.progress}%` }} />
      </div>
    );
  }
}

export default ProgressBar;
