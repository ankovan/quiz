<template>
  <div class="card" :class="hoverable ? 'hoverable' : ''">
    <a :href="link">
      <div class="image-holder">
        <img alt="Vue logo" :src="image" />
      </div>
      <slot></slot>
    </a>
  </div>
</template>
<style lang="less">
@import "../styles/mixins.less";
.card {
  .center-horisontal();
  background-color: white;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  // width: 30rem;
  &.hoverable:hover {
    transform: scale(1.04);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease;
  }
  .image-holder {
    img {
      width: 100%;
      height: 15rem;
      object-fit: cover;
    }
  }
}
</style>
<script>
export default {
  props: ["image", "hoverable", "link"],
};
</script>
