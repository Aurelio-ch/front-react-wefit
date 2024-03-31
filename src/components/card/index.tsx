import { useCart } from '@/context/cart-context'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { Button } from '../button'
import { Container } from './styles'
import { Product } from '@/@types/types'

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
    <Container
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
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
