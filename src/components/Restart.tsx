import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Restart = styled(motion.button)`
  margin: 1rem 0;
  border-radius: 1rem;
  border: 3px solid var(--bg-color-alt);
  padding: 0.5rem 1rem;
  color: var(--color-alt3);
  background-color: var(--bg-color);
  font-size: var(--fs-sm);
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 5px #ac553033;

  &:hover {
    color: var(--color-alt2);
    background-color: var(--bg-color-alt);
  }
`