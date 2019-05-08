import React from 'react';
import classnames from 'classnames';
import { supportsTouch } from '../../common/featureDetection';
import './styles.scss';


const MasterButton = ({ pickFighter, loading }) => {
  const cls = classnames({
    MasterButton: true,
    'MasterButton--loading': loading,
    'MasterButton--touch': supportsTouch(),
  });

  return (
    <div className={cls} onClick={pickFighter} />
  );
};

export default MasterButton;
