import styled from 'styled-components'

const mobileBreakpoint = '768px'

export const AiResponse = styled.textarea`
  width: 100%;
  height: 100%;
  max-width: min(80vw, 80vh);
  max-height: min(80vw, 80vh);
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
    height: 100%;
  }
`
