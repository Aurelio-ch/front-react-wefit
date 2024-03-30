import successImg from '@/assets/images/empty.svg'
import { Button } from '@/components/button'
import { Container } from './styles'

export function EmptySate() {
  function handleReloadPage() {
    window.location.reload()
  }
  return (
    <Container>
      <p>Parece que não há nada por aqui :(</p>
      <img src={successImg} alt="" />

      <Button.Container onClick={handleReloadPage}>
        Recarregar página
      </Button.Container>
    </Container>
  )
}
