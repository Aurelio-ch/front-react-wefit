import { api } from '@/lib/axios'

export interface GetProductResponse {
  id: number
  title: string
  price: number
  image: string
}

export async function getProduct() {
  const response = await api.get<GetProductResponse[]>('/products')

  return response.data
}
