<template>
  <a-card :class="$style.cardWrapper" hoverable>
    <template #cover>
      <a-image :alt="product.seoTitle" :preview="false" :src="product.imageUrl" placeholder />
    </template>
    <template #actions>
      <a-button @click.stop="onBuyClick" type="primary">Buy</a-button>
    </template>
    <a-card-meta :description="product.defaultDisplayedPriceFormatted" :title="product.name" />
  </a-card>
</template>

<script lang="ts" setup>
import { Product } from '#types/product';

const emit = defineEmits<{
  (event: 'buy', product: Product): void;
}>();

const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true,
  },
});

function onBuyClick() {
  emit('buy', props.product);
}
</script>

<style lang="css" module>
.cardWrapper {
  max-width: 240px;
  min-width: 200px;
  width: 25%;
}
</style>
