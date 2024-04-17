import styled from 'styled-components'

const mobileBreakpoint = '768px'

export const GameGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  width: 90%;
  height: 90%;

  @media (max-width: ${mobileBreakpoint}) {
    overflow: hidden;
    width: 90%;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`
