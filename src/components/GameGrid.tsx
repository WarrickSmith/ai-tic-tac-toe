import styled from 'styled-components'
import breakpoints from '../utils/breakpoints'
const { tablet } = breakpoints

export const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  width: 90%;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;

  @media (max-width: ${tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`
