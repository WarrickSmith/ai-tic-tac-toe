import styled from 'styled-components'
import breakpoints from '../utils/breakpoints'
const { tablet } = breakpoints

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  aspect-ratio: 1; /* Maintain a 1:1 aspect ratio */

  /* If the Board must be full width or full height depending on the breakpoint,
     set width or height to 100% and the other to auto. */
  @media (max-width: ${tablet}) {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${parseInt(tablet) + 1}px) {
    width: 100%;
    height: auto;
  }
`
