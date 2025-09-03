
export interface Product {
  id: number;
  category: 'medical' | 'cosmetics' | 'herbs';
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  usage: {
    en: string;
    ar: string;
  };
  price: number;
  images: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
