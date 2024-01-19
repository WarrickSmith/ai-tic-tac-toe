import styled from 'styled-components'
const mobileBreakpoint = '768px'

export const GameTitle = styled.div`
  margin-top: 2rem;
  color: var(--color-alt3);
  font-size: 12vh;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 12vw; // Span one column on mobile
  }
`
