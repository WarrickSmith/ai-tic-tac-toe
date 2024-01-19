import styled from 'styled-components'

export const Container = styled.div<{ height: number }>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height}px;
  overflow-y: auto;
`
