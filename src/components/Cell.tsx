import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Cell = styled(motion.div)`
  width: 10rem;
  height: 10rem;
  background-color: var(--bg-color-alt);
  color: var(--color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-lge);
  cursor: pointer;
`
