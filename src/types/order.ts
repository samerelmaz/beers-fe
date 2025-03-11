export interface OrderItem {
  product_id: number;
  name: string;
  price_per_unit: number;
  total: number;
  quantity: number;
}

export interface RoundItem {
  product_id: number;
  name: string;
  quantity: number;
}

export interface Round {
  id: number;
  created: string;
  items: RoundItem[];
}

export interface Order {
  id: number;
  created: string;
  paid: boolean;
  taxes: number;
  discounts: number;
  rounds: Round[];
  items: OrderItem[];
  subtotal: number;
}
