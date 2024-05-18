import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { getProductsByCategoryId } from '@app/shared/api';

import { Product } from '#types/product';
import type { Status } from '#types/misc';

const useProductsStore = defineStore('productList', () => {
  const productList = ref<Product[]>([]);
  const status = ref<Status>('loading');
  const isLoading = computed(() => status.value === 'loading');
  const isSuccess = computed(() => status.value === 'success');

  function getProducts(id: string) {
    status.value = 'loading';

    getProductsByCategoryId(id)
      .then((result) => {
        status.value = 'success';
        productList.value = result?.items ?? [];
      })
      .catch(() => {
        status.value = 'error';
      });
  }

  function $reset() {
    productList.value = [];
    status.value = 'loading';
  }

  return {
    status,
    isLoading,
    isSuccess,
    productList,
    getProducts,
    $reset,
  };
});

export { useProductsStore };
