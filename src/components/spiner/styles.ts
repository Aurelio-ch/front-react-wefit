import styled, { keyframes } from 'styled-components'

export const Container = styled.header`
  margin: 0 auto;
`

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Spinner = styled.div`
  border: 3px solid #929292;
  border-top: 3px solid #fff;
  border-radius: 50%;
  width: 83px;
  height: 83px;
  animation: ${spin} 0.8s linear infinite;
`
