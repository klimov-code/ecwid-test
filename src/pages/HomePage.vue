<template>
  <div :class="$style.linkWrapper">
    <router-link :to="{ name: 'products' }">
      <a-button type="primary">Go to Store</a-button>
    </router-link>
  </div>

  <a-descriptions title="Store Info">
    <a-descriptions-item label="Store Name">{{ store.profile.settings.storeName }}</a-descriptions-item>
    <a-descriptions-item label="Email">{{ store.profile.company.email }}</a-descriptions-item>
    <a-descriptions-item label="Country Code">{{ store.profile.company.countryCode }}</a-descriptions-item>
  </a-descriptions>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';

import { useProfileStore } from '@app/store';

const store = useProfileStore();

onBeforeMount(() => {
  store.getProfile();
});
</script>

<style lang="css" module>
.linkWrapper {
  margin-bottom: 24px;
}
</style>
