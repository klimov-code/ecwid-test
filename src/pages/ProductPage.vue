<template>
  <product :product-id="productId" />
</template>

<script setup lang="ts">
import { Product } from '@app/components/Product';

defineProps({
  productId: {
    type: String,
    required: true,
  },
});
</script>
