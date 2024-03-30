import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import { Container } from './styles'

const productSearchSchema = z.object({
  query: z.string(),
})

type ProductSearchSchema = z.infer<typeof productSearchSchema>

export function SearchForm() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')

  const { register, handleSubmit } = useForm<ProductSearchSchema>({
    resolver: zodResolver(productSearchSchema),
    defaultValues: {
      query: query ?? '',
    },
  })

  function handleSearch({ query }: ProductSearchSchema) {
    navigate(`/search?query=${query}`)
  }
  return (
    <Container onSubmit={handleSubmit(handleSearch)}>
      <input
        type="text"
        placeholder="Buscar filme pelo nome"
        {...register('query')}
      />
      <button>
        <AiOutlineSearch size={24} />
      </button>
    </Container>
  )
}
