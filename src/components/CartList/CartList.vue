<template>
  <a-list :data-source="store.cartList" item-layout="horizontal" size="large">
    <template #renderItem="{ item }: { item: CartItem }">
      <a-list-item :key="item.product.id">
        <template #actions>
          <a-button @click="onIncrement(item.product.id)" type="primary">+</a-button>
          <a-button @click="onDecrement(item.product.id)" type="primary">-</a-button>

          <a-button @click="onRemove(item.product.id)" danger>Remove</a-button>
        </template>

        <a-list-item-meta>
          <template #title>
            {{ item.product.name }}
          </template>

          <template #avatar>
            <img :alt="item.product.seoTitle" :class="$style.image" :src="item.product.smallThumbnailUrl" />
          </template>
        </a-list-item-meta>

        <div :class="$style.wrapper">
          <p :class="$style.count">{{ item.count }} pcs.</p>
        </div>

        <div :class="$style.wrapper">
          <p :class="$style.price">
            {{ item.product.defaultDisplayedPriceFormatted }}
          </p>
        </div>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts" setup>
import { useShoppingCartStore } from '@app/store';
import { CartItem } from '#types/cart';

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

<style lang="css">
.ant-list .ant-list-item-no-flex {
  display: flex;
}

.ant-list .ant-list-item .ant-list-item-meta {
  align-items: center;
}
</style>

<style lang="css" module>
.image {
  width: 40px;
  height: 40px;
}

.wrapper {
  width: 10%;
}

.count {
  margin-bottom: 0;
  text-align: right;
}

.price {
  margin-bottom: 0;
  font-weight: 700;
  text-align: right;
}
</style>
