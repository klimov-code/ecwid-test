<template>
  <shopping-cart :list="store.cartList" @decrement="onDecrement" @increment="onIncrement" @remove="onRemove" />
</template>

<script lang="ts" setup>
import { ShoppingCart } from '@app/components/ShoppingCart';
import { useShoppingCartStore } from '@app/store';
const store = useShoppingCartStore();

function onIncrement(id: number) {
  store.incrementCount(id);
}

function onDecrement(id: number) {
  store.decrementCount(id);
}

function onRemove(id: number) {
  store.removeFromCart(id);
}
</script>
