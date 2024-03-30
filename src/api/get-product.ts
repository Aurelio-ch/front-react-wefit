import { api } from '@/lib/axios'

export interface Product {
  id: number
  title: string
  price: number
  image: string
}

export async function getProduct() {
  const response = await api.get<Product[]>('/products')

  return response.data
}
