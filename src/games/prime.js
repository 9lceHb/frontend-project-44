import { getRandomInt } from './even.js';

const isPrime = (num) => {
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = () => {
  const num = getRandomInt(1, 500);
  const answer = isPrime(num) ? 'yes' : 'no';
  return [num, answer];
};
export default gamePrime;
