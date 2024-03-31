import { useCart } from '@/context/cart-context'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
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
  const [inputManualValue, setInputManualValue] = useState(0)
  const { decreaseQuantity, increaseQuantity, removeProduct, updateQuantity } =
    useCart()
  const { register, setValue, handleSubmit } = useForm<QuantitySchema>({
    resolver: zodResolver(quantitySchema),
  })

  useEffect(() => {
    setValue(
      'quantity',
      inputManualValue <= 0 ? itemCart.quantity : inputManualValue,
    )
  }, [itemCart.quantity, setValue, inputManualValue, setInputManualValue])

  function handleToDecrease(id: number) {
    decreaseQuantity(id)
  }

  function handleToIncrease(id: number) {
    increaseQuantity(id)
  }

  function handleRemoveProduct(id: number) {
    removeProduct(id)
  }

  function handleUpdateProduct({ quantity }: QuantitySchema) {
    updateQuantity(itemCart.id, quantity)
    setInputManualValue(0)
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
          <form onSubmit={handleSubmit(handleUpdateProduct)}>
            <input
              type="number"
              {...register('quantity', { min: 1 })}
              onChange={(e) => {
                const novaQuantidade = parseInt(e.target.value)
                setInputManualValue(novaQuantidade)
              }}
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
