import React, { Component } from 'react';
import * as qs from 'query-string';
import MasterButton from '../MasterButton';
import Fighter from '../Fighter';
import { pickRandomFighter } from './helpers';
import { preloadFighterImage } from '../../common/preloader';
import './styles.scss';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fighter: null,
      loading: false,
    };

    this.pickFighter = this.pickFighter.bind(this);
    this.reset = this.reset.bind(this);
  }

  pickFighter() {
    const { f } = qs.parse(window.location.search);
    const fighter = pickRandomFighter(f ? parseInt(f) : null);
    this.setState({ loading: true }, () => {
      preloadFighterImage(fighter)
      .then(() => {
        this.setState({ fighter, loading: false });
      });
    });
  }

  reset() {
    this.setState({ fighter: null });
  }

  render() {
    const { fighter, loading } = this.state;

    return (
      <div className="App">
        {
          fighter
            ? <Fighter fighter={fighter} reset={this.reset} />
          : <MasterButton pickFighter={this.pickFighter} loading={loading} />
        }
      </div>
    );
  }
}

export default App;
