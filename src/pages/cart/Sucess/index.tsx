import successImg from '@/assets/images/success.svg'
import { Button } from '@/components/button'
import { Container } from './styles'
import { Link } from 'react-router-dom'

export function CartSuccess() {
  return (
    <Container>
      <p>Compra realizada com sucesso!</p>
      <img src={successImg} alt="" />
      <Link to="/">
        <Button.Container>VOLTAR</Button.Container>
      </Link>
    </Container>
  )
}
