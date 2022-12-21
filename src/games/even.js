const getRandomInt = (min, max) => {
  const roundMin = Math.ceil(min);
  const roundMax = Math.floor(max);
  return Math.floor(Math.random() * (roundMax - roundMin)) + roundMin;
};

const gameEven = () => {
  const question = getRandomInt(1, 100);
  const answer = question % 2 ? 'no' : 'yes';
  return [question, answer];
};
export { gameEven, getRandomInt };
