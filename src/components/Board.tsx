import styled from 'styled-components'

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  height: 100%;
  max-width: min(80vw, 80vh);
  max-height: min(80vw, 80vh);
  aspect-ratio: 1 / 1;
`
