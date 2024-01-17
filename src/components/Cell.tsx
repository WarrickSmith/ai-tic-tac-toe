import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Cell = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
`
