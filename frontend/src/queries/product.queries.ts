import { useQuery } from '@tanstack/react-query'
import { productApi } from '../api/product.api'

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: productApi.getAll,
  })
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => productApi.getById(id),
    enabled: !!id,
  })
}
