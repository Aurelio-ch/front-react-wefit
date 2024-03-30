import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { Button } from '../button'
import { Container } from './styles'

interface ProductProps {
  product: {
    id: number
    title: string
    price: number
    image: string
  }
}

export function ProductCard({ product }: ProductProps) {
  return (
    <Container>
      <img src={product.image} alt="" />
      <p>{product.title}</p>
      <span>
        {product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </span>
      <Button.Container>
        <Button.Prefix>
          <MdOutlineAddShoppingCart size={15} /> 0
        </Button.Prefix>
        ADICIONAR AO CARRINHO
      </Button.Container>
    </Container>
  )
}
