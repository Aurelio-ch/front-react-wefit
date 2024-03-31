import { useMediaQuery } from 'react-responsive'
import { RowDefault } from './row-default'
import { RowMobile } from './row-mobile'
import { CartItem } from '@/@types/types'
export interface CardProps {
  itemCart: CartItem
}

export function CartProductRow({ itemCart }: CardProps) {
  const isMobile = useMediaQuery({ maxWidth: 430 })
  return isMobile ? (
    <RowMobile itemCart={itemCart} />
  ) : (
    <RowDefault itemCart={itemCart} />
  )
}
