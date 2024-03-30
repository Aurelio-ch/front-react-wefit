import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin: 0 1rem;

  background-color: ${(props) => props.theme.white};
  padding: 1.5rem;
  border-radius: ${(props) => props.theme['border-sm']};

  tbody {
    @media (max-width: 430px) {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  td {
    padding: 1.5rem 0;

    &:first-child {
      padding-bottom: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }
`

export const Thead = styled.thead`
  tr {
    th:first-child {
      width: 280px;
    }
    th:nth-child(2),
    th:nth-child(3) {
      width: 348px;
    }
    th:last-child {
      width: auto;
    }
    th {
      text-align: left;
      font-size: 0.875rem;
      font-weight: bold;
      color: ${(props) => props.theme['grey-500']};
    }
  }

  @media (max-width: 430px) {
    display: none;
  }
`

export const FooterCart = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;

  button {
    width: 9.813rem;
  }

  div {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    strong {
      font-size: 0.875rem;
      font-weight: bold;
      color: ${(props) => props.theme['grey-500']};
    }

    span {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${(props) => props.theme['blue-900']};
    }
  }

  @media (max-width: 430px) {
    flex-direction: column-reverse;
    gap: 1rem;
    div {
      justify-content: space-between;
    }

    button {
      width: 100%;
    }
  }
`

export const Divisor = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme['grey-500']};
`
