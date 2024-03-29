import { SearchForm } from '@/components/search-form'
import { Container, ProductContainer } from './styles'

export function Home() {
  return (
    <Container>
      <SearchForm />
      <ProductContainer></ProductContainer>
    </Container>
  )
}
