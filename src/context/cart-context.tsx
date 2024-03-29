import { ReactNode, createContext, useContext } from 'react'

interface CartContextType {}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
