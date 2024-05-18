<template>
  <product-blank v-if="productStore.isLoading" />

  <product-item
    :description="productStore.product?.description"
    :images="images"
    :name="productStore.product?.name"
    :price="productStore.product?.defaultDisplayedPriceFormatted"
    @buy="onBuyClick"
    v-else
  />
</template>

<script lang="ts" setup>
import { computed, onBeforeMount } from 'vue';

import ProductBlank from './ProductBlank.vue';
import ProductItem from './ProductItem.vue';
import { useProductStore, useShoppingCartStore } from '@app/store';
import { Product } from '#types/product';

const props = defineProps({
  productId: {
    type: String,
    required: true,
  },
});

const productStore = useProductStore();
const cartStore = useShoppingCartStore();

const images = computed(() => {
  const galleryImages = productStore.product?.galleryImages ?? [];
  const gallery = galleryImages.map((image) => image.imageUrl);

  return [productStore.product?.imageUrl, ...gallery];
});

function onBuyClick(product: Product) {
  cartStore.addToCart(product);
}

onBeforeMount(() => {
  productStore.getProduct(props.productId);
});
</script>
