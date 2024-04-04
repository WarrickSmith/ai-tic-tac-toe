import { GeminiPayload } from '../../types/types'

const postToGeminiPrompt = async (geminiPayload: GeminiPayload) => {
  try {
    const response = await fetch('http://localhost:5005/gemini-prompt', {
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
