import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme['blue-900']};

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  padding: 1rem;
  border-radius: ${(props) => props.theme['border-sm']};

  img {
    width: 9.188rem;
  }

  p {
    font-size: 0.75rem;
    font-weight: bold;
  }

  span {
    font-weight: bold;
  }
`
