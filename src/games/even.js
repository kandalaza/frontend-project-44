import runGame from '../index.js'

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".'
const MIN_RANDOM_NUMBER = 1
const MAX_RANDOM_NUMBER = 100

const isEven = number => number % 2 === 0

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)
  const correctAnswer = isEven(question) ? 'yes' : 'no'

  return {
    question: String(question),
    correctAnswer,
  }
}

const runEvenGame = () => runGame(DESCRIPTION, getQuestionAndAnswer)

export default runEvenGame
