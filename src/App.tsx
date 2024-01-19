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

const App: React.FC = () => {
  const [containerHeight, setContainerHeight] = useState(window.innerHeight)
  const [board, setBoard] = useState(Array(9).fill(''))
  const [isXNext, setIsXNext] = useState(true)
  const [winner, setWinner] = useState(calculateWinner(board))
  const isGameOver = winner !== null || board.every((cell) => cell !== '')

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
    // Reset the game state to its initial values
    setBoard(Array(9).fill(''))
    setIsXNext(true)
    setWinner(null)
  }
  const handleClick = (index: number) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = isXNext ? 'X' : 'O'

    setBoard(newBoard)
    setWinner(calculateWinner(newBoard))
    setIsXNext(!isXNext)
  }

  const renderCell = (index: number) => {
    return (
      <Cell
        key={index}
        onClick={() => handleClick(index)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {board[index]}
      </Cell>
    )
  }

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`
    } else if (board.every((cell) => cell !== '')) {
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
        <AiResponse placeholder="AI response will be shown here..." />
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
