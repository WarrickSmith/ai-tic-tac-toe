import postToGeminiPrompt from './postToGemini'
import { GeminiPayload, GeminiResponse } from '../../types/types'
import { validateGeminiResponse } from '../../utils'

const geminiResponse = async (
  geminiPayload: GeminiPayload
): Promise<GeminiResponse | null> => {
  try {
    const responseObject: GeminiResponse = await postToGeminiPrompt(
      geminiPayload
    )
    return responseObject
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

const getGeminiMove = async (
  newBoard: string[],
  history: GeminiResponse[]
): Promise<GeminiResponse> => {
  const moveSummary = JSON.stringify(history.map((move) => move.gameBoard))

  const geminiPayload: GeminiPayload = {
    model: 'gemini-pro',
    prompt: `You are playing as my opponent in a game of Naughts and crosses. 
An array of nine elements represents the game board with and 'x' or a 'o' representing a move and an empty sting element representing a possible move. 
The current game board is: ${JSON.stringify(newBoard)}]
You are playing as 'o'. 
It is your turn. 
Review the current game board and the history of moves so far (below) and choose a new move for 'o' that will most likely lead to you winning the game and determine the array element number that represents your move as 'o', with the top left square would be element 0 in the game board array. 
Only return a JSON object with the following three properties and values:
myMove: Your new move as 'o' as the correct game board array element number from 0 to 8.
moveSummary: A summary of why you chose that move.
gameBoard: The updated game board array with the value of 'myMove' inserted as an 'o' in the correct array element position, accurately matching the value for the myMove property.
The returned JSON object should be structured like this example: {"myMove": 5, "moveSummary": "Your move summary explanation", "gameBoard": ["x",,,,,"o",,,,]}
Make sure the value for gameBoard in the returned JSON object has an 'o' in the correct array element position accurately matching the value for the myMove property.
Only return the JSON object in your response, no other verbose words outside the object.
History of moves so far: ${moveSummary}`,
    stream: false,
  }

  const response = await geminiResponse(geminiPayload)
  const validation = response
    ? validateGeminiResponse(newBoard, response)
    : false
  console.log('Response Validation is: ', validation)

  if (response === null) {
    throw new Error('Gemini API returned a null response')
  }

  return response
}

export default getGeminiMove
