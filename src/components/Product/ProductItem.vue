<template>
  <a-row>
    <a-col :span="14">
      <div :class="$style.carouselWrapper">
        <a-carousel arrows dots-class="slick-dots slick-thumb">
          <template #customPaging="props">
            <img :src="images[props.i]" />
          </template>
          <div :key="id" v-for="(image, id) of images">
            <img :src="image" />
          </div>
        </a-carousel>
      </div>
    </a-col>

    <a-col :span="10">
      <a-flex :class="$style.contentWrapper" align="center" justify="space-between" vertical>
        <a-typography>
          <a-typography-title :class="$style.title" :level="3">
            {{ name }}
          </a-typography-title>

          <a-typography-paragraph :class="$style.price">{{ price }}</a-typography-paragraph>

          <div :class="$style.actions">
            <a-button @click="onBuyClick" block type="primary">Buy</a-button>
          </div>

          <a-typography-paragraph :class="$style.description" v-html="description" />
        </a-typography>
      </a-flex>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { Product } from '#types/product';

const emit = defineEmits<{
  (e: 'buy', product: Product): void;
}>();

defineProps({
  images: {
    type: Array as () => string[],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

function onBuyClick(product: Product) {
  emit('buy', product);
}
</script>

<style lang="css" module>
.carouselWrapper {
  max-width: 600px;
}

.contentWrapper {
  padding: 32px;
  width: 100%;
}

.title {
  text-align: left;
}

.price {
  text-align: left;
  font-weight: 700;
  font-size: 20px;
}

.actions {
  margin-bottom: 24px;
}

.description {
  text-align: left;
}
</style>

<style scoped>
:deep(.slick-track) {
  display: flex;
  align-items: center;
}

:deep(.slick-dots) {
  position: relative;
  height: auto;
}

:deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}

:deep(.slick-arrow) {
  display: none !important;
}

:deep(.slick-thumb) {
  bottom: 0px;
}

:deep(.slick-thumb li) {
  width: 60px;
  height: 60px;
  cursor: pointer;
}

:deep(.slick-thumb li.slick-active) {
  width: 60px;
}

:deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  display: block;
  object-fit: contain;
}

:deep(.slick-thumb li.slick-active img) {
  filter: grayscale(0%);
}
</style>
