import styled from 'styled-components'

const mobileBreakpoint = '768px'

export const AiResponse = styled.textarea`
  width: 90%;
  aspect-ratio: 1 / 1; 
  border: 3px solid var(--bg-color-alt);
  border-radius: 0.5rem;
  color: var(--color-alt);
  font-family: monospace;

  box-sizing: border-box;
  overflow-y: auto;
  resize: none;
  padding: 0.5rem;

  @media (max-width: ${mobileBreakpoint}) {
    height: 100%; 
  }
`