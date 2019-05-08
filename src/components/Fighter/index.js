import React from 'react';
import { getFighterImage } from './helpers';
import './styles.scss';

const Fighter = ({ fighter, reset }) => (
  <div className="Fighter" onClick={reset}>
    <div
      className="Fighter__image"
      style={{ backgroundImage: `url(${getFighterImage(fighter)})` }}
    />
    <div className="Fighter__name">
      {fighter.name}
    </div>
  </div>
);

export default Fighter;
