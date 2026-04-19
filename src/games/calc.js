import runGame from '../index.js'

const DESCRIPTION = 'What is the result of the expression?'
const MIN_RANDOM_NUMBER = 1
const MAX_RANDOM_NUMBER = 100
const OPERATORS = ['+', '-', '*']

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const getRandomOperator = () => OPERATORS[getRandomNumber(0, OPERATORS.length - 1)]

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber
    case '-':
      return firstNumber - secondNumber
    case '*':
      return firstNumber * secondNumber
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)
  const secondNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)
  const operator = getRandomOperator()
  const question = `${firstNumber} ${operator} ${secondNumber}`
  const correctAnswer = String(calculate(firstNumber, secondNumber, operator))

  return {
    question,
    correctAnswer,
  }
}

const runCalcGame = () => runGame(DESCRIPTION, getQuestionAndAnswer)

export default runCalcGame
