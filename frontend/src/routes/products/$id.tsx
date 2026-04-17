import { productApi } from '#/api/product.api'
import { queryClient } from '#/queries/client'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$id')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const id = Number(params.id)

    await queryClient.prefetchQuery({
      queryKey: ['product', id],
      queryFn: () => productApi.getById(id),
    })
  },
})

function RouteComponent() {
  const { id } = Route.useParams()

  const { data } = useQuery({
    queryKey: ['product', Number(id)],
    queryFn: () => productApi.getById(Number(id)),
  })
  if (!data) return <div>No data</div>

  const { product } = data

  return <div>{product.name}</div>
}
