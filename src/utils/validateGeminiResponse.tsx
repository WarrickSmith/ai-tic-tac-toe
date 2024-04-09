import { GeminiResponse } from '../types/types'

export const validateGeminiResponse = (
  prevGameBoard: string[],
  response: GeminiResponse
): string => {
  console.log('validateGeminiResponse :', prevGameBoard, response)

  // Check if the response object has the correct structure
  if (
    !response ||
    !response.gameBoard ||
    !response.myMove ||
    !response.moveSummary
  ) {
    return 'false-object has incorrect structure'
  }

  // Check if the myMove value is a valid available position
  // if (!prevGameBoard.includes(response.myMove)) {
  //   return false
  // }

  // Check if a previous move has been removed
  for (let i = 0; i < 9; i++) {
    if ((prevGameBoard[i] === 'x' || prevGameBoard[i] === 'o') && response.gameBoard[i] === '') {
      return 'false-a move has been removed'
    }
  }


  // Check if the gameBoard has only one new position filled
  let newPositionCount = 0
  for (let i = 0; i < 9; i++) {
    if (prevGameBoard[i] !== response.gameBoard[i]) {
      if (prevGameBoard[i] === 'x' && response.gameBoard[i] === 'o') {
        return 'false-AI replaced an "x" with "o"'
      }
      newPositionCount++
    }
  }
  if (newPositionCount !== 1) {
    return 'false-more than one new position filled'
  }

  // Check if the AI made a move
  if (
    prevGameBoard.every((cell, index) => cell === response.gameBoard[index])
  ) {
    return 'false-AI did not make a move'
  }

  return 'true'
}


