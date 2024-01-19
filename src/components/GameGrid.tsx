import styled from 'styled-components'

const mobileBreakpoint = '768px'

export const GameGrid = styled.div`
  display: grid;
  height: 90%;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  /* justify-content: center; */
  /* align-content: center; */
  justify-items: center;
  align-items: center;
  margin: auto;
  position: relative;

  @media (max-width: ${mobileBreakpoint}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`
