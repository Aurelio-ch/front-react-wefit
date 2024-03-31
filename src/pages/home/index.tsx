import { getProduct } from '@/api/get-product'
import { ProductCard } from '@/components/card'
import { EmptySate } from '@/components/empty-state'
import { SearchForm } from '@/components/search-form'
import { Loading } from '@/components/spiner'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { Container, ProductContainer } from './styles'

export function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['product'],
    queryFn: getProduct,
  })

  return (
    <>
      <Helmet title="Home" />
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
    </>
  )
}
