import { PrefixContainer } from './styles'

interface Props {
  children: React.ReactNode
}

export function ButtonPrefix({ children }: Props) {
  return <PrefixContainer>{children}</PrefixContainer>
}
