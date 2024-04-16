import { GeminiPayload } from '../../types/types'

const postToGeminiPrompt = async (geminiPayload: GeminiPayload) => {
  const GEMINI_URL = import.meta.env.VITE_AI_URL || 'http://localhost:5005'

  try {
    const response = await fetch(`${GEMINI_URL}/gemini-prompt`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(geminiPayload),
    })

    const responseText = await response.text()
    // Remove the leading and trailing quotes from the JSON string
    const jsonString = JSON.parse(responseText)
    const javascriptObject = JSON.parse(jsonString)

    return javascriptObject
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export default postToGeminiPrompt
