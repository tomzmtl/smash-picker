import React from 'react';
import { getFighterImage } from './helpers';
import './styles.scss';

const Fighter = ({ fighter, reset }) => {
  const css = {
    backgroundImage: `url(${getFighterImage(fighter)})`,
    backgroundSize: `${fighter.display.scale}px`,
    backgroundPosition: `${fighter.display.offsetX}px ${fighter.display.offsetY}px`,
  };

  return (
    <div className="Fighter" onClick={reset}>
      <div className="Fighter__image" style={css} />
      <div className="Fighter__name">
        {fighter.name}
      </div>
    </div>
  );
}

export default Fighter;
