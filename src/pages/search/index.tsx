import { SearchForm } from '@/components/search-form'
import { useSearchParams } from 'react-router-dom'
import { Container, ProductContainer } from './styles'

export default function Search() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')
  console.log(query)

  return (
    <Container>
      <SearchForm />
      <ProductContainer></ProductContainer>
    </Container>
  )
}
