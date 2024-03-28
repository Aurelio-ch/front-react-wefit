import { ComponentProps } from 'react'
import { ButtonVariant, Container } from './styles'

export type ButtonProps = ComponentProps<'button'> & {
  children: React.ReactNode
  variant?: ButtonVariant
}

export function ButtonContainer({
  children,
  variant = 'default',
  ...rest
}: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      {children}
    </Container>
  )
}
