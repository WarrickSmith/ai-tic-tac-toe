import styled from 'styled-components'

const mobileBreakpoint = '480px'

export const GameGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  width: 90%;
  overflow: hidden;

  @media (max-width: ${mobileBreakpoint}) {
    overflow: hidden;
    width: 90%;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`
