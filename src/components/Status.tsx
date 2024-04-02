import styled from 'styled-components'
const mobileBreakpoint = '768px'

export const Status = styled.div`
  color: var(--color-alt3);
  font-size: var(--fs-med);
  margin-bottom: 1rem;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: var(--fs-sm);
  }
`
