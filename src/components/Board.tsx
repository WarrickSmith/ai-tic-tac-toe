import styled from 'styled-components'

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  width: 60%;
  height: 60%;
  justify-content: center;
  align-content: center;
  margin: auto;
  position: relative;
`
