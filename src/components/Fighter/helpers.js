export const getFighterImage = (fighter) => {
  const { number, echo } = fighter;
  const folder = `${number < 10 ? `0${number}` : number}${echo ? 'e' : ''}`;
  return `${process.env.REACT_APP_RENDERS_URL}/fighters/${folder}/01.png`;
};
