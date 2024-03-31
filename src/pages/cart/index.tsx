import { Button } from '@/components/button'
import { EmptySate } from '@/components/empty-state'
import { useCart } from '@/context/cart-context'
import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CartProductRow } from './components/cart-product-row'
import { Container, Divisor, FooterCart, Thead } from './styles'

export function Cart() {
  const { items, finalizeOrder } = useCart()

  const totalCart = useMemo(() => {
    return items.reduce((soma, { subtotal }) => soma + subtotal, 0)
  }, [items])
  return (
    <>
      <Helmet title="Carrinho" />
      <Container>
        {!items || (items?.length <= 0 && <EmptySate />)}
        {items && items?.length > 0 && (
          <>
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
          </>
        )}
      </Container>
    </>
  )
}
