<template>
  <a-card :class="$style.blankWrapper" key="skeleton">
    <template #cover>
      <a-skeleton-image style="width: 240px" />
    </template>
    <template #actions>
      <a-skeleton-button active type="primary" />
    </template>
    <a-skeleton :paragraph="false" active />
  </a-card>
</template>

<style lang="css">
.ant-skeleton.ant-skeleton-element .ant-skeleton-image {
  width: 240px;
  height: 240px;
  line-height: 240px;
}
</style>

<style lang="css" module>
.blankWrapper {
  width: 240px;
}
</style>
