import createjs from 'preload-js';
import { FIGHTERS } from './fighters';
import { getFighterImage } from '../components/Fighter/helpers';


const queue = new createjs.LoadQueue(true);
const manifest = FIGHTERS.filter(f => f.pickable).map(f => getFighterImage(f));

queue.on('fileload', (a, b) => {
  console.log('progress', queue.progress);
});

export default (onComplete, onProgress) => {
  queue.loadManifest(manifest);
  queue.on('fileload', () => onProgress(queue.progress));
  queue.on('complete', () => onComplete());
};
