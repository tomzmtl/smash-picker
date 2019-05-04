import { FIGHTERS } from '../../common/fighters';
import { random } from '../../common/array';


export const pickRandomFighter = () => {
  const fighters = FIGHTERS.filter(f => f.pickable);
  const fighter = random(fighters);
  console.log(fighter);
};
