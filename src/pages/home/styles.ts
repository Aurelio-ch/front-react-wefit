import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0rem 1rem;
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 1.5rem;

  @media (max-width: 770px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 1rem;
  }
`
