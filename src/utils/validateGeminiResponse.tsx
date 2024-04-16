import { GeminiResponse } from '../types/types'

export const validateGeminiResponse = (
  prevGameBoard: string[],
  response: GeminiResponse
): string => {
  // Check if a response was received
  if (
    !response 
  ) {
    return 'NO_RESPONSE'
  }

  // Check if the response object has the correct structure
  if (

    !response.gameBoard ||
    !response.myMove ||
    !response.moveSummary
  ) {
    return 'INCORRECT_OBJECT_STRUCTURE'
  }

  // Check if the myMove value is a valid available position
  // if (!prevGameBoard.includes(response.myMove)) {
  //   return false
  // }

  // Check if a previous move has been removed
  for (let i = 0; i < 9; i++) {
    if (
      (prevGameBoard[i] === 'x' || prevGameBoard[i] === 'o') &&
      response.gameBoard[i] === ''
    ) {
      return 'REMOVED_PREVIOUS_MOVE'
    }
  }

  // Check if the gameBoard has only one new position filled
  let newPositionCount = 0
  for (let i = 0; i < 9; i++) {
    if (prevGameBoard[i] !== response.gameBoard[i]) {
      if (prevGameBoard[i] === 'x' && response.gameBoard[i] === 'o') {
        return 'ALTERED_PREVIOUS_MOVE'
      }
      newPositionCount++
    }
  }
  if (newPositionCount !== 1) {
    return 'TOO_MANY_NEW_MOVES'
  }

  // Check if the AI made a move
  if (
    prevGameBoard.every((cell, index) => cell === response.gameBoard[index])
  ) {
    return 'NO_MOVE_MADE'
  }

  return 'true'
}


