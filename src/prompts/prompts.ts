const prompts: Record<
  string,
  (newBoard: string[], moveSummary: string, validMoves: number[]) => string
> = {
  INITIAL: (
    newBoard,
    moveSummary,
    validMoves
  ) => `You are playing as my opponent in a game of Naughts and crosses. 
An array of nine elements represents the game board with and 'x' or a 'o' representing a move and an empty sting element representing a possible move. 
The current game board is: ${JSON.stringify(newBoard)}]
You are playing as 'o'. 
It is your turn. 
Review the current game board and the history of moves so far (below) and choose a new move for 'o' that will most likely lead to you winning the game and determine the array element number that represents your move as 'o', with the top left square would be element 0 in the game board array. 
Make sure the move you choose has a free space in the curret game board array above.
Valid moves that you can make are array elements: ${JSON.stringify(validMoves)}
Only return a JSON object with the following three properties and values:
myMove: Your new move as 'o' as the correct game board array element number from 0 to 8.
moveSummary: A summary of why you chose that move.
gameBoard: The updated game board array with the value of 'myMove' inserted as an 'o' in the correct array element position, accurately matching the value for the myMove property.
The returned JSON object should be structured like this example: {"myMove": 5, "moveSummary": "Your move summary explanation", "gameBoard": ${JSON.stringify(
    newBoard
  )}}
Make sure the value for gameBoard in the returned JSON object has an 'o' in the correct array element position accurately matching the value for the myMove property.
Only return the JSON object in your response, no other verbose words outside the object.
History of moves so far: ${moveSummary}`,
  ERROR: (
    newBoard,
    moveSummary,
    validMoves    
  ) => `Your last move was invalid. Have another go.
  You are playing as my opponent in a game of Naughts and crosses. 
An array of nine elements represents the game board with and 'x' or a 'o' representing a move and an empty sting element representing a possible move. 
The current game board is: ${JSON.stringify(newBoard)}]
You are playing as 'o'. 
It is your turn. 
Review the current game board and the history of moves so far (below) and choose a new move for 'o' that will most likely lead to you winning the game and determine the array element number that represents your move as 'o', with the top left square would be element 0 in the game board array. 
Make sure the move you choose has a free space in the curret game board array above.
Valid moves that you can make are arrayelements: ${JSON.stringify(validMoves)}
Only return a JSON object with the following three properties and values:
myMove: Your new move as 'o' as the correct game board array element number from 0 to 8.
moveSummary: A summary of why you chose that move.
gameBoard: The updated game board array with the value of 'myMove' inserted as an 'o' in the correct array element position, accurately matching the value for the myMove property.
The returned JSON object should be structured like this example: {"myMove": 5, "moveSummary": "Your move summary explanation", "gameBoard": ${JSON.stringify(
    newBoard
  )}}
Make sure the value for gameBoard in the returned JSON object has an 'o' in the correct array element position accurately matching the value for the myMove property.
Only return the JSON object in your response, no other verbose words outside the object.
History of moves so far: ${moveSummary}`,
}

export const getPrompt = (
  prompt: string,
  newBoard: string[],
  moveSummary: string
) => {
  const validMoves = newBoard.reduce((moves: number[], cell, index) => {
    if (cell === null) {
      moves.push(index)
    }
    return moves
  }, [])
  console.log('validMoves:', validMoves)

  return prompts[prompt](newBoard, moveSummary, validMoves)
}
