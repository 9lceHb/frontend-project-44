import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  const roundMin = Math.ceil(min);
  const roundMax = Math.floor(max);
  return Math.floor(Math.random() * (roundMax - roundMin)) + roundMin;
};

const generateNumberAnswer = () => {
  const number = getRandomInt(1, 100);
  const answer = number % 2 ? 'no' : 'yes';
  return [number, answer];
};

const evenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 1;
  while (i < 4) {
    const [number, answer] = generateNumberAnswer();
    console.log(`Qusestion: ${number}`);
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
export { evenGame, generateNumberAnswer };
