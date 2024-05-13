import styled from 'styled-components'
import breakpoints from '../utils/breakpoints'
const { mobile, smallTablet, tablet, desktop, largeDesktop, xLargeDesktop } =
  breakpoints

export const AiResponse = styled.textarea`
  /* width: min(80vw / 2, 40vh); */
  /* aspect-ratio: 1 / 1; */
  border: 3px solid var(--bg-color-alt);
  border-radius: 0.5rem;
  color: var(--color);
  font-family: monospace;

  box-sizing: border-box;
  overflow-y: auto;
  resize: none;
  padding: 0.5rem;
  margin: auto;

  @media (max-width: ${mobile}) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${smallTablet}) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${tablet}) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${desktop}) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${largeDesktop}) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${xLargeDesktop}) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${xLargeDesktop}) {
    width: 100%;
    height: 100%;
  }
`
