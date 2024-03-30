import styled from 'styled-components'

export const ContainerDefault = styled.tr`
  color: ${(props) => props.theme['blue-900']};
  font-weight: bold;
  button {
    background-color: transparent;
    line-height: 0;
    color: ${(props) => props.theme['blue-400']};
  }

  @media (max-width: 430px) {
    display: none;
  }
`

export const Product = styled.td`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: 91px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    p {
      font-size: 14px;
    }
  }
`

export const ProductQtd = styled.td`
  div {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    input {
      font-size: 14px;
      padding: 3px 0;
      text-align: center;
      width: 62px;
      border-radius: ${(props) => props.theme['border-sm']};
      border: 1px solid ${(props) => props.theme['grey-200']};
    }
    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }

    button {
      background-color: transparent;
      border-style: none;
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`

export const ProductRowMobile = styled.div`
  display: none;
  color: ${(props) => props.theme['blue-900']};
  font-weight: bold;
  button {
    background-color: transparent;
    line-height: 0;
    color: ${(props) => props.theme['blue-400']};
  }

  img {
    width: 64px;
  }

  @media (max-width: 430px) {
    display: flex;
    gap: 1rem;
  }

  .box-product-info {
    width: 100%;

    div {
      &:first-child {
        justify-content: space-between;
        align-items: center;
        p {
          width: 102px;
        }
      }
    }
  }
`
export const ProductInfo = styled.div`
  display: flex;
  gap: 1rem;
`

export const ProductQtdAndSubtotal = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    input {
      font-size: 14px;
      padding: 3px 0;
      text-align: center;
      width: 59px;
      height: 26px;
      border-radius: ${(props) => props.theme['border-sm']};
      border: 1px solid ${(props) => props.theme['grey-200']};
    }
    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }

    button {
      background-color: transparent;
      border-style: none;
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
      }
    }

    &:last-child {
      flex-direction: column;
      gap: 0;

      strong {
        color: ${(props) => props.theme['grey-500']};
        font-size: 0.75rem;
      }
    }
  }
`
