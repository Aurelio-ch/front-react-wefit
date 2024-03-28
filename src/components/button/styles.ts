import styled, { css } from 'styled-components'

export type ButtonVariant = 'default' | 'success'

interface ButtonProps {
  variant: ButtonVariant
}
export const Container = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: ${(props) => props.theme['blue-400']};
  width: 100%;
  border-radius: ${(props) => props.theme['border-sm']};

  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.5rem;

  ${({ variant }) =>
    variant === 'success' &&
    css`
      background: ${(props) => props.theme['green-900']};
    `}
`

export const PrefixContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`
