import styled from 'styled-components'

export const Container = styled.div<{ height: number }>`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  grid-template-columns: 100vw;
  width: 100vw;
  max-width: 100vw;
  height: ${(props) => props.height}px;
  max-height: 100vh;
  justify-items: center;
  overflow: auto; // Ensure content is not clipped
`
