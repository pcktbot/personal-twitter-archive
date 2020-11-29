<template>
  <div :class="[{ 'is-visible': isVisible }, 'drawer']">
    <button
      class="drawer__btn"
      @click="isVisible = !isVisible"
    >
      <img v-bind="img" class="drawer__btn__avatar">
    </button>
    <div class="drawer__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isVisible: true,
      img: {
        src: '/avatar.png',
        height: 70,
        width: 70
      }
    }
  }
}
</script>

<style lang="scss">
$primary: #e70822;
$secondary: #1e0409;
$tertiary: #102340;
$quaternary: #017a68;
.drawer {
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 90vw;
  max-width: 400px;
  padding: 0.25em 1.5em;
  transform: translateX(calc(-100% + 10px));
  transition: 200ms linear;
  background-color: white;
  border-right: 4px double #0d1626;
  box-shadow: 10px 0px 20px rgba(48,8,20,1);
  z-index: 2;
  &__content {
    height: 100%;
    // border: 4px double #0d1626;
  }
  &__btn {
    z-index: 2;
    margin: 0;
    padding: 0.25em;
    background: none;
    background-color: white;
    overflow: hidden;
    border-radius: 50%;
    border: none;
    position: absolute;
    right: 0;
    top: 10px;
    transform: translateX(calc(100% - 10px));
    transition: 100ms 200ms ease-in;
    box-shadow: 10px 0px 20px rgba(48,8,20,1);
  }
  &.is-visible {
    transform: translateX(0%);
    & .drawer__btn {
      transform: translateX(50%);
    }
  }
}
</style>
