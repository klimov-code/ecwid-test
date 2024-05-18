import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { getCategoriesByParentId } from '@app/shared/api';
import { arrayToTree } from '@app/shared/lib';

import { Category } from '#types/category';
import type { Status } from '#types/misc';

const useCategoriesStore = defineStore('categoryList', () => {
  const categoryList = ref<Category[]>([]);
  const categoryTree = computed(() => arrayToTree<Category>(categoryList.value));
  const status = ref<Status>('loading');
  const isLoading = computed(() => status.value === 'loading');

  function getCategories(id: string) {
    status.value = 'loading';

    getCategoriesByParentId(id)
      .then((result) => {
        status.value = 'success';
        categoryList.value = result?.items ?? [];
      })
      .catch(() => {
        status.value = 'error';
      });
  }

  function $reset() {
    categoryList.value = [];
    status.value = 'loading';
  }

  return {
    status,
    isLoading,
    categoryList,
    categoryTree,
    getCategories,
    $reset,
  };
});

export { useCategoriesStore };
