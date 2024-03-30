import { useCart } from '@/context/cart-context'
import { MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { CarLink, Container } from './styles'
export function Header() {
  const { items } = useCart()

  return (
    <Container>
      <Link to="/">
        <h1>WeMovies</h1>
      </Link>

      <CarLink to="/cart">
        <div>
          <p>Meu Carrrinho</p>
          <span>{items.length} itens</span>
        </div>
        <MdShoppingBasket size={24} />
      </CarLink>
    </Container>
  )
}
