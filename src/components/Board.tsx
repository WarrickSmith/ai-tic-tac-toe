import styled from 'styled-components'

const mobileBreakpoint = '480px'

export const Board = styled.div`
  width: min(80vw / 2, 40vh);
  aspect-ratio: 1 / 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  overflow: hidden;

  @media (max-width: ${mobileBreakpoint}) {
    width: min(80vw / 2, 40vh);
  }
`
