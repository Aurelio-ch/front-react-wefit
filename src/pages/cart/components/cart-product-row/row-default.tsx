import { useCart } from '@/context/cart-context'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { IoMdTrash } from 'react-icons/io'
import { PiMinusCircleBold, PiPlusCircleBold } from 'react-icons/pi'
import { z } from 'zod'
import { CardProps } from '.'
import { ContainerDefault, Product, ProductQtd } from './styles'

export const quantitySchema = z.object({
  quantity: z.number(),
})

export type QuantitySchema = z.infer<typeof quantitySchema>

export function RowDefault({ itemCart }: CardProps) {
  const { decreaseQuantity, increaseQuantity, removeProduct } = useCart()
  const { register } = useForm<QuantitySchema>({
    resolver: zodResolver(quantitySchema),
  })

  function handleToDecrease(id: number) {
    decreaseQuantity(id)
  }

  function handleToIncrease(id: number) {
    increaseQuantity(id)
  }

  function handleRemoveProduct(id: number) {
    removeProduct(id)
  }

  return (
    <ContainerDefault>
      <Product>
        <img src={itemCart.image} alt="" />
        <div>
          <p>{itemCart.title}</p>
          <span>
            {itemCart.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
      </Product>
      <ProductQtd>
        <div>
          <button
            disabled={itemCart.quantity === 1}
            onClick={() => handleToDecrease(itemCart.id)}
          >
            <PiMinusCircleBold size={18} />
          </button>
          <form>
            <input
              type="number"
              {...register('quantity')}
              value={itemCart.quantity}
            />
          </form>
          <button onClick={() => handleToIncrease(itemCart.id)}>
            <PiPlusCircleBold size={18} />
          </button>
        </div>
      </ProductQtd>
      <td>
        {itemCart.subtotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </td>
      <td>
        <button onClick={() => handleRemoveProduct(itemCart.id)}>
          <IoMdTrash size={24} />
        </button>
      </td>
    </ContainerDefault>
  )
}
