import type { ProductPayload } from '#/api/product.api'
import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import { Textarea } from '#/components/ui/textarea'
import { useCreateProduct } from '#/queries/product.mutations'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/products/add/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { mutate, isPending, error } = useCreateProduct()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState<ProductPayload>({
    name: '',
    price: 0,
    description: '',
    category: '',
    brand: 'Apple',
  })

  const navigate = useNavigate()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      mutate(formData)
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1000)
  }

  if (isSuccess) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
          Product Added!
        </h1>
        <p className="mt-2 text-muted-foreground">
          Your product has been successfully added to the store.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button onClick={() => navigate({ to: '/' })}>View Products</Button>
          <Button
            variant="outline"
            onClick={() => {
              setIsSuccess(false)
              setFormData({
                name: '',
                price: 0,
                description: '',
                category: '',
                brand: 'Apple',
              })
            }}
          >
            Add Another
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to products
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Add New Product
        </h1>
        <p className="mt-2 text-muted-foreground">
          Fill in the details below to add a new product to your store.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter product name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="price">Price ($)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              name="category"
              type="text"
              placeholder="e.g., Electronics, Clothing"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Describe your product..."
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* <div className="space-y-2">
          <Label htmlFor="image">Image URL</Label>
          <div className="flex gap-3">
            <Input
              id="image"
              name="image"
              type="url"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={handleChange}
              className="flex-1"
            />
            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background">
              <ImagePlus className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Leave empty to use a default placeholder image
          </p>
        </div> */}

        {/* {formData.image && (
          <div className="space-y-2">
            <Label>Preview</Label>
            <div className="h-48 w-48 overflow-hidden rounded-lg border border-border">
              <img
                src={formData.image}
                alt="Preview"
                className="h-full w-full object-cover"
                crossOrigin="anonymous"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=600&h=600&fit=crop'
                }}
              />
            </div>
          </div>
        )} */}

        <div className="flex gap-3">
          <Button type="submit" disabled={isSubmitting} className="flex-1">
            {isSubmitting ? 'Adding Product...' : 'Add Product'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate({ to: '/' })}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}
