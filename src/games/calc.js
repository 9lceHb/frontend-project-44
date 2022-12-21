import { getRandomInt } from './even.js';

const gameCalc = () => {
  const operators = { 1: '+', 2: '-', 3: '*' };
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const randomOperator = operators[getRandomInt(1, 4)];
  const question = `${num1} ${randomOperator} ${num2}`;
  let answer;
  if (randomOperator === '+') {
    answer = String(num1 + num2);
  } else if (randomOperator === '-') {
    answer = String(num1 - num2);
  } else {
    answer = String(num1 * num2);
  }
  return [question, answer];
};
export default gameCalc;
