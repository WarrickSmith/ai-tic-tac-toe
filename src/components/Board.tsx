import styled from 'styled-components'
import breakpoints from '../utils/breakpoints'
const { mobile, smallTablet, tablet, desktop, largeDesktop, xLargeDesktop } =
  breakpoints

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  max-width: 100%;
  max-height: 100%;
  /* overflow: auto; */
  aspect-ratio: 1; /* Maintain a 1:1 aspect ratio */

  @media (max-width: ${mobile}) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${smallTablet}) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${tablet}) {
    width: auto;
    height: 100%;
  }

  @media (max-width: ${desktop}) {
    width: auto;
    height: 100%;
  }

  @media (max-width: ${largeDesktop}) {
    width: auto;
    height: 100%;
  }

  @media (max-width: ${xLargeDesktop}) {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${xLargeDesktop}) {
    width: auto;
    height: 100%;
  }
`
