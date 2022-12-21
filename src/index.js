import readlineSync from 'readline-sync';
import { gameEven } from './games/even.js';
import gameCalc from './games/calc.js';

const game = (name, gameType) => {
  let gameLogic;
  if (gameType === 'evenType') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    gameLogic = gameEven;
  } else if (gameType === 'calcType') {
    console.log('What is the result of the expression?');
    gameLogic = gameCalc;
  }
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
