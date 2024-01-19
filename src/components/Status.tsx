import styled from 'styled-components'
const mobileBreakpoint = '768px'

export const Status = styled.div`
  grid-column: span 2;
  grid-row: span 1;
  color: var(--color-alt3);
  font-size: var(--fs-med);

  @media (max-width: ${mobileBreakpoint}) {
    grid-column: span 1; // Span one column on mobile
  }
`
