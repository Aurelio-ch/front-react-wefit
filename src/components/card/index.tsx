import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { Button } from '../button'
import { Container } from './styles'

export function ProductCard() {
  return (
    <Container>
      <img
        src="https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png"
        alt=""
      />
      <p>Viúva Negra</p>
      <span>R$ 9,99</span>
      <Button.Container>
        <Button.Prefix>
          <MdOutlineAddShoppingCart size={15} /> 0
        </Button.Prefix>
        ADICIONAR AO CARRINHO
      </Button.Container>
    </Container>
  )
}
