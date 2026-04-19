import runGame from '../index.js'

const DESCRIPTION = 'What number is missing in the progression?'
const PROGRESSION_LENGTH = 10
const MIN_RANDOM_NUMBER = 1
const MAX_RANDOM_NUMBER = 100
const MIN_STEP = 1
const MAX_STEP = 10

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const buildProgression = (start, step, length) => Array.from(
  { length },
  (_, index) => start + index * step,
)

const getQuestionAndAnswer = () => {
  const start = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)
  const step = getRandomNumber(MIN_STEP, MAX_STEP)
  const hiddenIndex = getRandomNumber(0, PROGRESSION_LENGTH - 1)
  const progression = buildProgression(start, step, PROGRESSION_LENGTH)
  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return {
    question,
    correctAnswer,
  }
}

const runProgressionGame = () => runGame(DESCRIPTION, getQuestionAndAnswer)

export default runProgressionGame
