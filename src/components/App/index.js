import React, { Component } from 'react';
import classnames from 'classnames';
import MasterButton from '../MasterButton';
import Fighter from '../Fighter';
import { pickRandomFighter } from './helpers';
import { supportsTouch } from '../../common/featureDetection';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fighter: null,
    };

    this.pickFighter = this.pickFighter.bind(this);
    this.reset = this.reset.bind(this);
  }

  pickFighter() {
    this.setState({ fighter: pickRandomFighter() });
  }

  reset() {
    this.setState({ fighter: null });
  }

  render() {
    const { fighter } = this.state;

    const cls = classnames({
      App: true,
      'App--touch': supportsTouch(),
    });

    return (
      <div className={cls}>
        {fighter ? <Fighter fighter={fighter} pickFighter={this.pickFighter} reset={this.reset} /> : null}
        {fighter ? null : <MasterButton pickFighter={this.pickFighter} />}
      </div>
    );
  }
}

export default App;
