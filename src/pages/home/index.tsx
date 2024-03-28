import { ProductCard } from '@/components/card'
import { SearchForm } from '@/components/search-form'
import { Container, ProductContainer } from './styles'

export function Home() {
  return (
    <Container>
      <SearchForm />

      <ProductContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductContainer>
    </Container>
  )
}
