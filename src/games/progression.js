import { getRandomInt } from './even.js';

const gameProgression = () => {
  const startNum = getRandomInt(1, 100);
  const differenceNum = getRandomInt(-10, 11);
  const positionNum = getRandomInt(1, 11);
  const questionList = [];
  for (let i = startNum; questionList.length < 10; i += differenceNum) {
    questionList.push(i);
  }
  const answer = String(questionList[positionNum]);
  questionList[positionNum] = '..';
  const question = questionList.join(' ');
  return [question, answer];
};
export default gameProgression;
