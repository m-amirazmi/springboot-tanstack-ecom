import { useMutation, useQueryClient } from '@tanstack/react-query'
import { productApi } from '../api/product.api'

export function useCreateProduct() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: productApi.create,

    onSuccess: () => {
      // 🔥 critical: refresh product list
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })
}
