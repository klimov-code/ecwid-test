<template>
  <category-list :categoryId="categoryId" />

  <product-list :categoryId="categoryId" />
</template>

<script setup lang="ts">
import { CategoryList } from '@app/components/CategoryList';
import { ProductList } from '@app/components/ProductList';

defineProps({
  categoryId: {
    type: String,
    required: true,
  },
});
</script>
