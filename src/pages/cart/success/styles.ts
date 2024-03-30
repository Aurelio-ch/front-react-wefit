import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  text-align: center;

  margin: 0 1rem;
  background-color: ${(props) => props.theme.white};
  padding: 4rem;
  border-radius: ${(props) => props.theme['border-sm']};
  img {
    width: 294.96px;
  }

  p {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['blue-900']};
  }

  button {
    width: 173px;
    height: 40px;
  }
`
