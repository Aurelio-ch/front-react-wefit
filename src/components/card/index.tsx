import { Product } from '@/api/get-product'
import { useCart } from '@/context/cart-context'
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
  const { addToCart, items } = useCart()

  function handleAddProductToCart(product: Product) {
    const { id, title, image, price } = product
    addToCart({ id, title, image, price })
  }

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
      <Button.Container
        onClick={() => handleAddProductToCart(product)}
        variant={
          items.some((item) => item.id === product.id) ? 'success' : 'default'
        }
      >
        <Button.Prefix>
          <MdOutlineAddShoppingCart size={15} />
          {items.find((item) => item.id === product.id)?.quantity || 0}
        </Button.Prefix>
        ADICIONAR AO CARRINHO
      </Button.Container>
    </Container>
  )
}
