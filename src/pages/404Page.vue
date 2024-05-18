<template>
  <a-result status="404" sub-title="Sorry, the page you visited does not exist." title="404">
    <template #extra>
      <router-link :to="{ name: 'products' }">
        <a-button type="primary">Back Home</a-button>
      </router-link>
    </template>
  </a-result>
</template>
