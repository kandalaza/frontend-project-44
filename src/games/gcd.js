import runGame from '../index.js'

const DESCRIPTION = 'Find the greatest common divisor of given numbers.'
const MIN_RANDOM_NUMBER = 1
const MAX_RANDOM_NUMBER = 100

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let a = firstNumber
  let b = secondNumber

  while (b !== 0) {
    const remainder = a % b
    a = b
    b = remainder
  }

  return a
}

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)
  const secondNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)
  const question = `${firstNumber} ${secondNumber}`
  const correctAnswer = String(getGreatestCommonDivisor(firstNumber, secondNumber))

  return {
    question,
    correctAnswer,
  }
}

const runGcdGame = () => runGame(DESCRIPTION, getQuestionAndAnswer)

export default runGcdGame
