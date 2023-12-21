import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 10px;
`

const Cell = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
`

const Display = styled.div`
  margin-top: 20px;
  font-size: 18px;
`

const App: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(''))
  const [isXNext, setIsXNext] = useState(true)
  const winner = calculateWinner(board)

  const handleClick = (index: number) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = isXNext ? 'X' : 'O'

    setBoard(newBoard)
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
    } else {
      return `Next player: ${isXNext ? 'X' : 'O'}`
    }
  }

  return (
    <Container>
      <Board>
        {Array.from({ length: 9 }, (_, index) => renderCell(index))}
      </Board>
      <Display>{getStatus()}</Display>
    </Container>
  )
}

const calculateWinner = (squares: string[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}

export default App
