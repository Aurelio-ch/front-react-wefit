import { AiOutlineSearch } from 'react-icons/ai'
import { Container } from './styles'
export function SearchForm() {
  return (
    <Container>
      <input type="text" placeholder="Buscar filme pelo nome" />
      <button>
        <AiOutlineSearch size={24} />
      </button>
    </Container>
  )
}
