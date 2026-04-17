import { productApi } from '#/api/product.api'
import { Button } from '#/components/ui/button'
import { useCart } from '#/context/CartContext'
import { queryClient } from '#/queries/client'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Check, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

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
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const { data } = useQuery({
    queryKey: ['product', Number(id)],
    queryFn: () => productApi.getById(Number(id)),
  })

  if (!data)
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-foreground">
          Product not found
        </h1>
        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to products
        </Link>
      </div>
    )

  const { product } = data

  const handleAddToCart = () => {
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to products
      </Link>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="overflow-hidden rounded-lg border border-border">
          {/* <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
            crossOrigin="anonymous"
          /> */}
        </div>

        <div className="flex flex-col">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {product.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            {product.name}
          </h1>
          <p className="mt-4 text-3xl font-semibold text-foreground">
            ${product.price.toFixed(2)}
          </p>

          <div className="mt-6 border-t border-border pt-6">
            <h2 className="text-sm font-medium text-foreground">Description</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </div>

          <div className="mt-8">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={handleAddToCart}
            >
              {isAdded ? (
                <>
                  <Check className="mr-2 h-5 w-5" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
