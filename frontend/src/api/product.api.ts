import { api } from './client'

export type Product = {
  id: number
  available: boolean
  brand: string
  category: string
  description: string
  name: string
  price: number
  quantity: number
  releaseAt: string
}

export type ProductsResponse = {
  message: string
  total: number
  products: Product[]
}

export type ProductResponse = {
  message: string
  product: Product
}

export const productApi = {
  getAll: async (): Promise<ProductsResponse> => {
    const res = await api.get('/products')
    return res.data
  },

  getById: async (id: number): Promise<ProductResponse> => {
    console.log(id)
    const res = await api.get(`/products/${id}`)
    return res.data
  },
}
