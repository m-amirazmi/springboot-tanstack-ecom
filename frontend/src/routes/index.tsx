import { productApi } from '#/api/product.api'
import { ProductGrid } from '#/components/ProductGrid'
import { queryClient } from '#/queries/client'
import { useProducts } from '#/queries/product.queries'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
  loader: async () =>
    await queryClient.prefetchQuery({
      queryKey: ['products'],
      queryFn: productApi.getAll,
    }),
})

function App() {
  const { data, isLoading, error } = useProducts()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Our Products
        </h1>
        <p className="mt-2 text-muted-foreground">
          Discover our curated collection of premium products
        </p>
      </div>
      {data?.products ? (
        <ProductGrid products={data.products} />
      ) : (
        <div>Not products</div>
      )}
    </div>
  )
}
