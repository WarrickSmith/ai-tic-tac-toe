import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Cell = styled(motion.div)`
  background-color: var(--bg-color-alt);
  color: var(--color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10vh;
  cursor: pointer;
`
