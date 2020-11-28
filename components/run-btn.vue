<template>
  <div class="circle">
    <b-btn class="circle__btn" @click="$emit('submit')">
      RUN
    </b-btn>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
$size: 8em;
.circle {
  position: absolute;
  bottom: 0;
  left: 50%;
  height: $size;
  width: $size * 2.25;
  border-radius: 20px;
  background: black;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -5%)
             rotateX(25deg);
  &__btn {
    position: absolute;
    font-size: $size / 1.5;
    width: 90%;
    height: 90%;
    left: 50%;
    transform: translate(-50%, -20%);
    transition: transform 100ms linear,
                box-shadow 150ms linear,
                color 200ms ease-in-out;
    border-radius: 20px;
    border: none;
    padding: 0;
    background: radial-gradient(
      circle at 70% 25%,
      #db7f8f,
      #cc4d6a,
      #991c3f
    );
    box-shadow: inset 0 -5px 5px #7b1433,
                0 15px 0 #7b1433,
                0 16px 0 #520e23;
    color: #7b1433;
    font-weight: 700;
    line-height: 1;
    text-shadow: 0 -4px 2px #520e23;
    &:hover {
      color: #520e23;
      transform: translate(-50%, -25%);
    }
    &:focus {
      color: #520e23;
    }
    &:active {
      color: #520e23;
      transform: translate(-50%, 0%);
      box-shadow: inset 0 -5px 5px #7b1433,
                  0 0px 0 #7b1433,
                  0 1px 0 #520e23;
    }
  }
}
</style>
