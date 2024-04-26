import styled from 'styled-components'

const mobileBreakpoint = '480px'

export const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  width: 90%;
  overflow: hidden; // Ensure content is not clipped

  @media (max-width: ${mobileBreakpoint}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`
