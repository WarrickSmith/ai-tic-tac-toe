import styled from 'styled-components'
import { motion } from 'framer-motion'
import breakpoints from '../utils/breakpoints'
const { mobile, smallTablet, tablet, desktop, largeDesktop, xLargeDesktop } =
  breakpoints

export const Cell = styled(motion.div)`
  background-color: var(--bg-color-alt);
  color: var(--color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  /* Set a base font size */
  font-size: 3rem;

  @media (max-height: 600px) {
    font-size: 2rem;
  }

  @media (min-width: ${mobile}) {
    font-size: 3rem;
  }

  @media (min-width: ${smallTablet}) {
    font-size: 3rem;
  }

  @media (min-width: ${tablet}) {
    font-size: 4rem;
  }

  @media (min-width: ${desktop}) {
    font-size: 5rem;
  }

  @media (min-width: ${largeDesktop}) {
    font-size: 6rem;
  }

  @media (min-width: ${xLargeDesktop}) {
    font-size: 7rem;
  }
`
