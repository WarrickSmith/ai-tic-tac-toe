import styled from 'styled-components'

export const Board = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  aspect-ratio: 1 / 1;
`
