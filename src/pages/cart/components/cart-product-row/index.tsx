import { CartItem } from '@/context/cart-context'
import { RowDefault } from './row-default'
import { RowMobile } from './row-mobile'

export interface CardProps {
  itemCart: CartItem
}

export function CartProductRow({ itemCart }: CardProps) {
  return (
    <>
      <RowDefault itemCart={itemCart} />
      <RowMobile itemCart={itemCart} />
    </>
  )
}
