import successImg from '@/assets/images/empty.svg'
import { Button } from '@/components/button'
import { Container } from './styles'

export function EmptySate() {
  return (
    <Container>
      <p>Parece que não há nada por aqui :(</p>
      <img src={successImg} alt="" />

      <a href="/">
        <Button.Container>Recarregar página</Button.Container>
      </a>
    </Container>
  )
}
