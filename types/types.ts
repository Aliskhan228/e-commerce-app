export type Currency = "USD" | "EUR" | "GBP";

export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  currency?: string;
  image: string;
  rating?: number;
}

export interface CartProduct extends Product {
  quantity: number;
  totalPrice: number;
}

export interface MetaData {
  total_items: number;
  total_pages: number;
  current_page: number;
  per_page: number;
  remaining_count: number;
}
