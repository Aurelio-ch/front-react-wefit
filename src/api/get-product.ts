import { Product } from '@/@types/types'
import { api } from '@/lib/axios'

export async function getProduct() {
  const response = await api.get<Product[]>('/products')

  return response.data
}
