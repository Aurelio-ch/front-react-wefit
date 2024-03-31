export interface Product {
  id: number
  title: string
  price: number
  image: string
}

export interface CartItem {
  id: number
  title: string
  price: number
  subtotal: number
  image: string
  quantity: number
}
