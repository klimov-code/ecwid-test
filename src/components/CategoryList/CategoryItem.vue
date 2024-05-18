<template>
  <div :class="$style.cardWrapper">
    <div :class="$style.imageWrapper">
      <img :alt="alt" :src="src" />
    </div>

    <div :class="$style.textWrapper">
      <p :class="$style.text">
        <slot name="default" />
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
});
</script>

<style lang="css" module>
.cardWrapper {
  width: 240px;
  height: 240px;
  overflow: hidden;
  position: relative;

  border: 1px solid #f0f0f0;
  border-radius: 8px;
  background-color: #fff;

  cursor: pointer;
  transition: box-shadow 0.2s;
}

.imageWrapper {
  width: 100%;
  height: 100%;

  align-content: center;
}

.cardWrapper:hover {
  box-shadow:
    0 1px 2px -2px rgba(0, 0, 0, 0.16),
    0 3px 6px 0 rgba(0, 0, 0, 0.12),
    0 5px 12px 4px rgba(0, 0, 0, 0.09);
}

.cardWrapper img {
  width: 100%;
  height: auto;

  transition: transform 0.5s ease-in-out;
}

.cardWrapper:hover img {
  transform: scale(1.1);
}

.textWrapper {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  text-align: center;

  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #fff 100%);
}

.text {
  font-weight: 700;
  margin-bottom: 0;
  color: black;
}
</style>
