import { useState } from 'react'
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

  const geminiPayload: GeminiPayload = {
    model: 'gemini-pro',
    prompt: getPrompt(CURRENT_PROMPT, newBoard, moveSummary),
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
