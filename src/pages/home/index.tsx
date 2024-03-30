import { getProduct } from '@/api/get-product'
import { ProductCard } from '@/components/card'
import { SearchForm } from '@/components/search-form'
import { Loading } from '@/components/spiner'
import { useQuery } from '@tanstack/react-query'
import { Container, ProductContainer } from './styles'
import { EmptySate } from '@/components/empty-state'

export function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['product'],
    queryFn: getProduct,
  })

  return (
    <Container>
      <SearchForm />
      {isLoading && <Loading />}
      <ProductContainer>
        {data && data?.length > 0
          ? data.map((product) => {
              return <ProductCard key={product.id} product={product} />
            })
          : !isLoading && <EmptySate />}
      </ProductContainer>
    </Container>
  )
}
