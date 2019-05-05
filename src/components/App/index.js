import React, { Component } from 'react';
import classnames from 'classnames';
import MasterButton from '../MasterButton';
import Fighter from '../Fighter';
import ProgressBar from '../ProgressBar';
import { pickRandomFighter } from './helpers';
import { supportsTouch } from '../../common/featureDetection';
import './styles.css';
import preloader from '../../common/preloader';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fighter: null,
      loaded: false,
      progress: 0,
    };

    this.onComplete = this.onComplete.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.pickFighter = this.pickFighter.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    preloader(this.onComplete, this.onProgress);
  }

  onComplete() {
    this.setState({ loaded: true });
  }

  onProgress(progress) {
    this.setState({ progress });
  }

  pickFighter() {
    this.setState({ fighter: pickRandomFighter() });
  }

  reset() {
    this.setState({ fighter: null });
  }

  render() {
    const { fighter, loaded } = this.state;

    const cls = classnames({
      App: true,
      'App--touch': supportsTouch(),
    });

    const showFighter = loaded && fighter;
    const showButton = loaded && !fighter;
    const showLoading = !loaded;

    return (
      <div className={cls}>
        {showLoading ? <ProgressBar progress={this.state.progress * 100} /> : null}
        {showFighter ? <Fighter fighter={fighter} pickFighter={this.pickFighter} reset={this.reset} /> : null}
        {showButton ? <MasterButton pickFighter={this.pickFighter} /> : null}
      </div>
    );
  }
}

export default App;
