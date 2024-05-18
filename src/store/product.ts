import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { getProductById } from '@app/shared/api';

import { Product } from '#types/product';
import type { Status } from '#types/misc';

const useProductStore = defineStore('product', () => {
  const product = ref<Product>({} as Product);
  const status = ref<Status>('loading');
  const isLoading = computed(() => status.value === 'loading');

  function getProduct(id: string) {
    status.value = 'loading';

    getProductById(id)
      .then((result) => {
        status.value = 'success';
        product.value = result;
      })
      .catch(() => {
        status.value = 'error';
      });
  }

  return {
    status,
    isLoading,
    product,
    getProduct,
  };
});

export { useProductStore };
