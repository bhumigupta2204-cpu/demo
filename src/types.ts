export interface Product {
  id: string;
  name: string;
  description: string;
  details: string[];
  price: number;
  category: 'Skincare' | 'Makeup' | 'Hair Care' | 'Body Care' | 'Beauty Accessories';
  image: string;
  fallbackImage: string;
  rating: number;
  reviewsCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedShade?: string;
}
