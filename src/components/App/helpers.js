import { FIGHTERS } from '../../common/fighters';
import { random } from '../../common/array';


export const pickRandomFighter = (index) => {
  if (index) {
    return FIGHTERS[index];
  }
  const fighters = FIGHTERS.filter(f => f.pickable);
  return random(fighters);
};
