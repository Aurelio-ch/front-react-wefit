import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  padding: 2rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.25rem;
    font-weight: bold;
  }
`

export const CarLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;

    p,
    span {
      font-weight: 600;
      transition: all 0.2s ease-in-out;
      line-height: 1.1;
    }

    p {
      font-size: 0.875rem;
    }

    span {
      font-size: 0.75rem;
      color: ${(props) => props.theme['grey-500']};
    }
  }

  @media (max-width: 430px) {
    div {
      p {
        display: none;
      }
    }
  }
`
