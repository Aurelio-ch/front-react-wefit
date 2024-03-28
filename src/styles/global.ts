import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme['blue-400']}
  }
  body {
    height: 100vh;
    background-color:  ${(props) => props.theme['blue-900']};
    color: ${(props) => props.theme.white};
    -webkit-font-smoothing: antialiased;
  }
  body, input-security, textarea, button {
    font-family: 'Open Sans', sans-serif;
  }

  #root {
    width: 100%;
    max-width: 1080px;

    margin: 0 auto;
    height: 100vh;
  }

  button,
  a {
    text-decoration: none;
    border: 0;
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.white};

    transition: all ease-in-out 0.3s;

    &:hover {
      filter: brightness(0.8);
    }

  }
`
