export type GeminiPayload = {
  model: string
  prompt: string
  stream: boolean
}

export type GeminiResponse = {
  myMove: number
  moveSummary: string
  gameBoard: string[]
}