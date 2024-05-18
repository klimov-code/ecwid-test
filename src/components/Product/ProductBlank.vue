<template>
  <a-row>
    <a-col :span="14">
      <div :class="$style.imageWrapper">
        <div :class="$style.imageBlank" />
      </div>
    </a-col>

    <a-col :span="10">
      <a-flex :class="$style.descriptionWrapper" align="center" justify="space-between" vertical>
        <a-skeleton :paragraph="{ rows: 4 }" active />
      </a-flex>
    </a-col>
  </a-row>
</template>

<style lang="css" module>
.imageWrapper {
  max-width: 600px;
}

.imageBlank {
  width: 100%;
  height: 100%;
}

.descriptionWrapper {
  padding: 32px;
  width: 100%;
}
</style>
