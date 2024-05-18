<template>
  <a-flex align="center" justify="space-between">
    <a-typography-title :level="3">Store</a-typography-title>

    <router-link :to="{ name: 'cart' }">
      <a-badge :count="store.count">
        <shopping-cart-outlined :class="$style.cartIcon" />
      </a-badge>
    </router-link>
  </a-flex>
</template>

<script lang="ts" setup>
import { ShoppingCartOutlined } from '@ant-design/icons-vue';

import { useShoppingCartStore } from '@app/store';

const store = useShoppingCartStore();
</script>

<style lang="css" module>
.cartIcon {
  font-size: 36px;
  color: #1677ff;
}
</style>
