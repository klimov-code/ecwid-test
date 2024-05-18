<template>
  <a-app>
    <a-layout-header :class="$style.header"><Header /></a-layout-header>
    <a-layout-content><router-view /></a-layout-content>
  </a-app>
</template>

<script setup lang="ts">
import { Header } from '@app/components/Header';
</script>

<style lang="css" module>
.header {
  padding-bottom: 24px;
}
</style>
