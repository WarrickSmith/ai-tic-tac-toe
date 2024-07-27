import postToGeminiPrompt from './postToGemini'
import { GeminiPayload, GeminiResponse } from '../../types/types'
import { validateGeminiResponse } from '../../utils'
import { getPrompt } from '../../prompts/prompts'

let CURRENT_PROMPT = 'INITIAL'

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

  let response: GeminiResponse | null = null
  let validation: string = ''
  let attempts = 0

  while (attempts < 5 && validation !== 'true') {
    const geminiPayload: GeminiPayload = {
      model: 'gemini-1.5-flash',
      prompt: getPrompt(CURRENT_PROMPT, newBoard, moveSummary),
      stream: false,
    }

    response = await geminiResponse(geminiPayload)
    if (response === null) {
      throw new Error('Gemini API returned a null response')
    }
    validation = response
      ? validateGeminiResponse(newBoard, response)
      : 'NO_RESPONSE'

    if (validation === 'true') return response
    CURRENT_PROMPT = validation
    attempts++
    console.log(`AI Validation attempt ${attempts} failed :`, validation)
  }

  throw new Error(`Validating AI Response Failed ${attempts} times !!`)
}

export default getGeminiMove
