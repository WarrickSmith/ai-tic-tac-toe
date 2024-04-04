import { useState, useEffect } from 'react'
import {
  Container,
  GameGrid,
  Board,
  Cell,
  Status,
  Restart,
  AiResponse,
  GameTitle,
} from './components'
import { calculateWinner } from './utils'
import getGeminiMove from './services/gemini/getGeminiMove'

const App: React.FC = () => {
  const [containerHeight, setContainerHeight] = useState(window.innerHeight)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [winner, setWinner] = useState(() => calculateWinner(board))

  const isGameOver =
    winner !== null ||
    board.every((cell) => cell !== null && cell !== '')

  useEffect(() => {
    const handleResize = () => {
      setContainerHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const restartGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setWinner(null)
  }
  const handleClick = async (index: number) => {

    if (board[index] || winner || isGameOver) return
    const newBoard = [...board]
    newBoard[index] = isXNext ? 'x' : 'o'
    
    setBoard(newBoard)
    setWinner(calculateWinner(newBoard))
    
    if (winner || isGameOver || calculateWinner(newBoard)) return
    
    setIsXNext(() => false)

    if (isXNext && !isGameOver && !winner) {
      const aiNewMove = await getGeminiMove(newBoard)
      const {gameBoard}= aiNewMove
      setBoard(gameBoard)
      setWinner(calculateWinner(gameBoard))
      setIsXNext(()=> true)
    }
  }

  const renderCell = (index: number) => {
    return isGameOver || !isXNext? (
      <Cell
        style={{ opacity: 0.5, cursor: 'default' }}
        key={index}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 1 }}
      >
        {board[index]?.toUpperCase()}
      </Cell>
    ) : (
      <Cell
        style={{
          opacity: !isXNext ? 0.5 : 1,
          cursor: !isXNext ? 'not-allowed' : 'pointer',
        }}
        key={index}
        onClick={() => handleClick(index)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {board[index]?.toUpperCase()}
      </Cell>
    )
  }

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`
    } else if (board.every((cell) => cell !== null && cell !== '')) {
      return 'Draw'
    } else {
      return `Next player: ${isXNext ? 'X' : 'O'}`
    }
  }

  return (
    <Container height={containerHeight}>
      <GameTitle>AI Tic-Tac-Toe</GameTitle>
      <Status>{getStatus()}</Status>
      <GameGrid>
        <Board>
          {Array.from({ length: 9 }, (_, index) => renderCell(index))}
        </Board>
        <AiResponse
          id="ai-response"
          placeholder="AI response will be shown here..."
        />
      </GameGrid>
      <Restart
        onClick={restartGame}
        style={{ visibility: isGameOver ? 'visible' : 'hidden' }}
      >
        RESTART
      </Restart>
    </Container>
  )
}

export default App
