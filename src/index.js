import readlineSync from 'readline-sync';
import { gameEven } from './games/even.js';
import gameCalc from './games/calc.js';
import gameGcd from './games/gcd.js';
import gameProgression from './games/progression.js';
import gamePrime from './games/prime.js';

const helpFucn = (gameType) => {
  let gameLogic;
  let text;
  if (gameType === 'evenType') {
    text = 'Answer "yes" if the number is even, otherwise answer "no".';
    gameLogic = gameEven;
  } else if (gameType === 'calcType') {
    text = 'What is the result of the expression?';
    gameLogic = gameCalc;
  } else if (gameType === 'gcdType') {
    text = 'Find the greatest common divisor of given numbers.';
    gameLogic = gameGcd;
  } else if (gameType === 'progressionType') {
    text = 'What number is missing in the progression?';
    gameLogic = gameProgression;
  } else if (gameType === 'primeType') {
    text = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    gameLogic = gamePrime;
  }
  return [text, gameLogic];
};

const game = (name, gameType) => {
  const [text, gameLogic] = helpFucn(gameType);
  console.log(text);
  let i = 1;
  while (i < 4) {
    const [question, answer] = gameLogic();
    console.log(`Qusestion: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${name}!`);
      i = 10;
    }
  }
  if (i !== 10) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default game;
