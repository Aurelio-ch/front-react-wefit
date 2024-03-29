import { Button } from '@/components/button'
import { Link } from 'react-router-dom'
import { CartProductRow } from './components/cart-product-row'
import { Container, Divisor, FooterCart, Thead } from './styles'

export function Cart() {
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
          <CartProductRow />
          <CartProductRow />
          <CartProductRow />
        </tbody>
      </table>

      <Divisor />

      <FooterCart>
        <Link to="/cart/success">
          <Button.Container>FINALIZAR PEDIDO</Button.Container>
        </Link>

        <div>
          <strong>TOTAL</strong>
          <span>R$ 29,90</span>
        </div>
      </FooterCart>
    </Container>
  )
}
