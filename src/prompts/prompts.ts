import { winningLines } from '../utils/calculateWinner'

const prompts: Record<
  string,
  (newBoard: string[], moveSummary: string, validMoves: number[]) => string
> = {
  INITIAL: (newBoard = [], moveSummary = '', validMoves = []) =>
    `
  You are playing as my opponent in a game of Naughts and crosses also known as tic-tac-toe.
  The game is played on a three row by three column board.
  For you to play, the game board of 9 squares is represented by an array of 9 elements numbering from 0 (top left square), 4 (center square) to 8 (bottom right square).
  To win the game a player needs either three x's or the o's in a straight line on the board.
  For you to win, you will need three 'o's in a straight line on the board.

  So the following array has elements that show winning lines as a combination of three element numbers from our game board numbered 0 to 8 ${JSON.stringify(
    winningLines
  )}.

  You are playing as 'o'.
  Your opponent (me) is playing as 'x'
  The current game board is ${JSON.stringify(newBoard)}]
  Valid moves that you can make this turn are array elements: ${JSON.stringify(
    validMoves
  )}

  It is now your turn  and you need to choose your next valid move.
  You cannot choose a move that has already been made and is already represented by an 'x' or an 'o' in the game board array.

  1. Check to see if you can win the game by choosing a valid move from the valid moves array completing a straight line in your next move. if you can, that will be your next move.
  2. Otherwise, check to see if your opponent can win the game by choosing from the valid moves array completing a straight line in their next move. if your opponent can, that will be your next move.
  3. Otherwise, choose a valid move that will best lead to a future winning move.

  Only return a JSON object with the following three properties and values:
  myMove: Your new move as 'o' as the correct valid game board array element number from 0 to 8.
  moveSummary: A summary of why you chose that move.
  gameBoard: The updated game board array with the value of 'myMove' inserted as an 'o' in the correct game board array element position, accurately matching the value for the myMove property.

  The returned JSON object should be structured like this example: {"myMove": 5, "moveSummary": "Your move summary explanation", "gameBoard": ${JSON.stringify(
    newBoard
  )}}

  Only return the JSON object in your response, no other verbose words outside the object.
  Previous moves: ${JSON.stringify(moveSummary)}
  `,
  NO_RESPONSE: () =>
    `You failed to provide a response for your move. Have another go.
  `,

  INCORRECT_OBJECT_STRUCTURE: () => `Your last move had an invalid object structure. This is an example valid structure:
    {"myMove": 5, "moveSummary": "Your move summary explanation", "gameBoard": ["X","","","","","","","",""]
    )}}
    Have another go.
  `,

  MOVE_ALREADY_MADE: () =>
    `Your last move had already been previously made. Have another go.
  `,

  REMOVED_PREVIOUS_MOVE: () =>
    `Your response seems to have removed a previous move already made. Have another go.
  `,

  ALTERED_PREVIOUS_MOVE: () =>
    `Your reponse seems to have changed a previous move, either an 'x' to an 'o' or an 'o' to an 'x'. Have another go.
  `,

  TOO_MANY_NEW_MOVES: () =>
    `Your last response seems to have had more then one move or added moves for the opponent. Have another go.
  `,

  NO_MOVE_MADE: () =>
    `Your last response did not seem to make a new move. Have another go.
  `,
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
  const initialPrompt = prompts.INITIAL(newBoard, moveSummary, validMoves)

  if(prompt === 'INITIAL') return initialPrompt 
  else return prompts[prompt]([],'',[]) + initialPrompt
}
