import styled from 'styled-components'

const mobileBreakpoint = '480px'
const smallTabletBreakpoint = '768px'
const tabletBreakpoint = '1024px'

export const GameTitle = styled.div`
  margin-top: 4rem;
  color: var(--color-alt3);
  font-size: 5rem;

  @media (max-width: ${smallTabletBreakpoint}) {
    font-size: 4rem;
  }

  @media (max-width: ${tabletBreakpoint}) {
    font-size: 3rem;
  }

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 2rem;
  }
`
