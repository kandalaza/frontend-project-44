import runGame from '../index.js'

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const MIN_RANDOM_NUMBER = 1
const MAX_RANDOM_NUMBER = 100

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const isPrime = (number) => {
  if (number < 2) {
    return false
  }

  const maxDivider = Math.floor(Math.sqrt(number))
  for (let divider = 2; divider <= maxDivider; divider += 1) {
    if (number % divider === 0) {
      return false
    }
  }

  return true
}

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)
  const correctAnswer = isPrime(question) ? 'yes' : 'no'

  return {
    question: String(question),
    correctAnswer,
  }
}

const runPrimeGame = () => runGame(DESCRIPTION, getQuestionAndAnswer)

export default runPrimeGame
