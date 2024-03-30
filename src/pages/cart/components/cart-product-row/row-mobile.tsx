import { useCart } from '@/context/cart-context'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { IoMdTrash } from 'react-icons/io'
import { PiMinusCircleBold, PiPlusCircleBold } from 'react-icons/pi'
import { CardProps } from '.'
import { QuantitySchema, quantitySchema } from './row-default'
import { ProductInfo, ProductQtdAndSubtotal, ProductRowMobile } from './styles'

export function RowMobile({ itemCart }: CardProps) {
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
    <>
      <ProductRowMobile>
        <img src={itemCart.image} alt="" />
        <div className="box-product-info">
          <ProductInfo>
            <p>{itemCart.title}</p>
            <span>
              {itemCart.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <button onClick={() => handleRemoveProduct(itemCart.id)}>
              <IoMdTrash size={24} />
            </button>
          </ProductInfo>

          <ProductQtdAndSubtotal>
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

            <div>
              <strong>SUBTOTAL</strong>
              <span>
                {itemCart.subtotal.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
          </ProductQtdAndSubtotal>
        </div>
      </ProductRowMobile>
    </>
  )
}
