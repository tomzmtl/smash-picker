import createjs from 'preload-js';
import { getFighterImage } from '../components/Fighter/helpers';


export const preloadFighterImage = (fighter) => {
  const queue = new createjs.LoadQueue(false);
  const src = getFighterImage(fighter);
  queue.loadFile({ src, type: 'image' });
  return new Promise((resolve, reject) => {
    queue.on('complete', () => resolve(src));
    queue.on('error', () => reject(src));
  });
};
