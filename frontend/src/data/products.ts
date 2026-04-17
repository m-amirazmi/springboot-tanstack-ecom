export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White Sneakers',
    price: 89.99,
    description:
      'Timeless white sneakers crafted with premium leather and comfortable cushioning. Perfect for everyday wear, these versatile shoes pair well with any outfit. Features breathable lining and durable rubber sole for long-lasting comfort.',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop',
    category: 'Footwear',
  },
  {
    id: '2',
    name: 'Minimalist Watch',
    price: 199.99,
    description:
      'Elegant minimalist watch with a clean dial and premium stainless steel case. Japanese quartz movement ensures precise timekeeping. Water-resistant up to 30 meters with a genuine leather strap that ages beautifully.',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    category: 'Accessories',
  },
  {
    id: '3',
    name: 'Wireless Headphones',
    price: 249.99,
    description:
      'Premium wireless headphones with active noise cancellation and 30-hour battery life. Hi-res audio certified with custom 40mm drivers. Comfortable memory foam ear cushions and foldable design for portability.',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
    category: 'Electronics',
  },
  {
    id: '4',
    name: 'Leather Backpack',
    price: 159.99,
    description:
      'Handcrafted leather backpack with spacious compartments and padded laptop sleeve. Features solid brass hardware and adjustable shoulder straps. Perfect blend of style and functionality for work or travel.',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    category: 'Bags',
  },
  {
    id: '5',
    name: 'Ceramic Coffee Mug',
    price: 24.99,
    description:
      'Artisan ceramic coffee mug with a smooth matte finish. Holds 12oz and features a comfortable handle. Microwave and dishwasher safe. Each piece is uniquely glazed for a one-of-a-kind look.',
    image:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop',
    category: 'Home',
  },
  {
    id: '6',
    name: 'Wool Blend Sweater',
    price: 119.99,
    description:
      'Cozy wool blend sweater in a classic crew neck style. Soft and warm without being bulky. Ribbed cuffs and hem for a clean finish. Machine washable for easy care.',
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=600&fit=crop',
    category: 'Clothing',
  },
  {
    id: '7',
    name: 'Plant Pot Set',
    price: 44.99,
    description:
      'Set of three modern ceramic plant pots in varying sizes. Includes drainage holes and matching saucers. Perfect for succulents, herbs, or small houseplants. Neutral tones complement any decor.',
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop',
    category: 'Home',
  },
  {
    id: '8',
    name: 'Sunglasses',
    price: 79.99,
    description:
      'Classic aviator sunglasses with polarized lenses and UV400 protection. Lightweight metal frame with adjustable nose pads. Comes with a protective case and cleaning cloth.',
    image:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
    category: 'Accessories',
  },
]

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id)
}

export const addProduct = (product: Omit<Product, 'id'>): Product => {
  const newProduct: Product = {
    ...product,
    id: String(products.length + 1),
  }
  products.push(newProduct)
  return newProduct
}
