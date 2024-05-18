import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { Product } from '#types/product';
import type { Cart } from '#types/cart';

const useShoppingCartStore = defineStore(
  'shoppingCart',
  () => {
    const cart = ref<Cart>({});
    const count = computed(() => Object.values(cart.value).reduce((a, b) => a + b.count, 0));
    const cartList = computed(() => Object.values(cart.value));

    function getCart() {
      return cart.value;
    }

    function addToCart(product: Product) {
      const id = product.id;

      if (cart.value[id]) {
        cart.value[id].count++;
      } else {
        cart.value[id] = { count: 1, product };
      }
    }

    function incrementCount(id: number) {
      if (cart.value[id]) {
        cart.value[id].count++;
      }
    }

    function decrementCount(id: number) {
      if (cart.value[id]) {
        if (cart.value[id].count > 1) {
          cart.value[id].count--;
        } else {
          delete cart.value[id];
        }
      }
    }

    function removeFromCart(id: number) {
      delete cart.value[id];
    }

    function $reset() {
      cart.value = {};
    }

    return {
      cart,
      cartList,
      count,
      getCart,
      addToCart,
      incrementCount,
      decrementCount,
      removeFromCart,
      $reset,
    };
  },
  {
    persist: true,
  },
);

export { useShoppingCartStore };
