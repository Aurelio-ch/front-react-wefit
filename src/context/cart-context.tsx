import { Product } from '@/api/get-product'
import { ReactNode, createContext, useContext, useState } from 'react'

export interface CartItem {
  id: number
  title: string
  price: number
  subtotal: number
  image: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product) => void
  decreaseQuantity: (id: number) => void
  increaseQuantity: (id: number) => void
  removeProduct: (id: number) => void
  finalizeOrder: () => void
}

interface CartContextType {}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(product: Product) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.id === product.id)

      if (productInCart) {
        return state.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              subtotal: product.price * (item.quantity + 1),
            }
          } else {
            return item
          }
        })
      } else {
        const newProduct: CartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          subtotal: product.price,
          image: product.image,
          quantity: 1,
        }
        return [...state, newProduct]
      }
    })
  }

  function decreaseQuantity(id: number) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.id === id)

      if (productInCart) {
        return state.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
              subtotal: (item.subtotal / item.quantity) * (item.quantity - 1),
            }
          } else {
            return item
          }
        })
      }
      return state
    })
  }

  function increaseQuantity(id: number) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.id === id)

      if (productInCart) {
        return state.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              subtotal: (item.subtotal / item.quantity) * (item.quantity + 1),
            }
          } else {
            return item
          }
        })
      }

      return state
    })
  }

  function removeProduct(id: number) {
    const newAllProducts = cartItems.filter((item) => item.id !== id)
    setCartItems(newAllProducts)
  }

  function finalizeOrder() {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
        decreaseQuantity,
        increaseQuantity,
        removeProduct,
        finalizeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
