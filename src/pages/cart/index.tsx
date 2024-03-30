import { Button } from '@/components/button'
import { useCart } from '@/context/cart-context'
import { Link } from 'react-router-dom'
import { CartProductRow } from './components/cart-product-row'
import { Container, Divisor, FooterCart, Thead } from './styles'

export function Cart() {
  const { items, finalizeOrder } = useCart()
  const totalCart = items.reduce((soma, { subtotal }) => {
    return soma + subtotal
  }, 0)
  return (
    <Container>
      <table>
        <Thead>
          <tr>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </Thead>

        <tbody>
          {items.map((item) => {
            return <CartProductRow key={item.id} itemCart={item} />
          })}
        </tbody>
      </table>

      <Divisor />

      <FooterCart>
        <Link to="/cart/success">
          <Button.Container onClick={finalizeOrder}>
            FINALIZAR PEDIDO
          </Button.Container>
        </Link>

        <div>
          <strong>TOTAL</strong>
          <span>
            {totalCart.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
      </FooterCart>
    </Container>
  )
}
