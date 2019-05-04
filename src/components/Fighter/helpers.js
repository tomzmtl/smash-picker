export const getFighterImage = (fighter) => {
  const { number, echo } = fighter;
  const folder = `${number < 10 ? `0${number}` : number}${echo ? 'e' : ''}`;
  return `${process.env.PUBLIC_URL}/images/fighters/${folder}/01.png`;
};
