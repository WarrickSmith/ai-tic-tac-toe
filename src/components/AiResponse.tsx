import styled from 'styled-components'

const mobileBreakpoint = '480px'

export const AiResponse = styled.textarea`
  width: min(80vw / 2, 40vh);
  aspect-ratio: 1 / 1;
  border: 3px solid var(--bg-color-alt);
  border-radius: 0.5rem;
  color: var(--color);
  font-family: monospace;

  box-sizing: border-box;
  overflow-y: auto;
  resize: none;
  padding: 0.5rem;
  margin: auto;

  @media (max-width: ${mobileBreakpoint}) {
    width: min(90vw, 40vh);
    height: min(90vw, 40vh);
  }
`
