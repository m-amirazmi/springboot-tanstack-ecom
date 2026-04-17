import type { Product } from '#/api/product.api'
import { Link } from '@tanstack/react-router'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      className="group block"
      to="/products/$id"
      params={{ id: product.id.toString() }}
    >
      <div className="overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg">
        {/* <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            crossOrigin="anonymous"
          />
        </div> */}
        <div className="p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {product.category}
          </p>
          <h3 className="mt-1 text-lg font-medium text-card-foreground group-hover:text-primary">
            {product.name}
          </h3>
          <p className="mt-2 text-lg font-semibold text-foreground">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  )
}
