import { Product } from '#types/product';

type CartItem = { count: number; product: Product };
type Cart = Record<number, CartItem>;

export type { Cart, CartItem };
