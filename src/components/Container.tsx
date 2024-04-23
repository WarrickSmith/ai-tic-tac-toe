import styled from 'styled-components'

export const Container = styled.div<{ height: number }>`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  grid-template-columns: 100%;
  width: 100%;
  max-width: 100vw;
  height: ${(props) => props.height}px;
  max-height: 100vh;
  justify-items: center;
`
