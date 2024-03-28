import styled from 'styled-components'

export const Container = styled.form`
  width: calc(100% - 2px);
  background-color: ${(props) => props.theme.white};
  display: flex;
  padding: 1rem;
  gap: 1rem;
  border: 2px solid ${(props) => props.theme.white};

  border-radius: ${(props) => props.theme['border-lg']};

  input {
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    border: none;
    color: ${(props) => props.theme['blue-900']};

    &::placeholder {
      color: ${(props) => props.theme.placeholder};
    }

    &:focus {
      box-shadow: 0 0 0 0;
    }
  }

  button {
    background-color: transparent;
    line-height: 0;
    svg {
      color: ${(props) => props.theme.placeholder};
    }
  }

  &:focus-within {
    border: 2px solid ${(props) => props.theme['blue-400']};
  }
`
