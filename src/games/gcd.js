import { getRandomInt } from './even.js';

const findGcd = (num1, num2) => {
  if (num1 % num2 === 0) {
    return num2;
  }
  return findGcd(num2, num1 % num2);
};

const gameGcd = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(findGcd(num1, num2));
  return [question, answer];
};
export default gameGcd;
