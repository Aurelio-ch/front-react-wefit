import { Product } from '@/@types/types'
import { ProductCard } from '@/components/card'
import { EmptySate } from '@/components/empty-state'
import { SearchForm } from '@/components/search-form'
import { Loading } from '@/components/spiner'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { Container, ProductContainer } from './styles'

export default function Search() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')

  const { data, isLoading } = useQuery({
    queryKey: ['search-product', query],
    queryFn: async () => {
      const { data } = await api.get<Product[]>(`/products`)

      if (query && query !== null) {
        const queryFormatted = query
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()

        const filteredData = data.filter((item) => {
          const titleFormatted = item.title
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()

          return titleFormatted.includes(queryFormatted)
        })

        return filteredData
      }

      return data
    },
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
