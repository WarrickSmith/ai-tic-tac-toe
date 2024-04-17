import styled from 'styled-components'
import { motion } from 'framer-motion'

const mobileBreakpoint = '768px'
const tableBreakpoint = '1024px'

export const Cell = styled(motion.div)`
  background-color: var(--bg-color-alt);
  color: var(--color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-med);
  cursor: pointer;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: var(--fs-sm);
  }

  @media (max-width: ${tableBreakpoint}) {
    font-size: var(--fs-med);
  }

  @media (min-width: ${tableBreakpoint}) {
    font-size: var(--fs-lge);
  }
`
