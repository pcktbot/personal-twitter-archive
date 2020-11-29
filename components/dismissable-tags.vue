<template>
  <div class="tag-container">
    <close-tag
      v-for="tag in tags"
      :key="tag.label"
      :tag="tag"
    />
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default () {
        return [
          { label: 'start', value: '2017-01-20' },
          { label: 'end', value: '2020-01-20' },
          { label: 'keyword', value: 'Trump' }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
$blue: #0e1625;
.tag-container {
  padding: 1.2em;
  display: flex;
  max-width: 30vw;
  min-width: 200px;
  flex-wrap: wrap;
  justify-content: flex-end;
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 1;
}

.tag-close {
  font-size: 1.2rem;
  font-weight: 100;
  display: flex;
  align-items: center;
  color: white;
  margin: 0.15em;
  padding: 0.15em 0.5em;
  border-radius: 15px;
  background-color: #49688c;
  background-image: linear-gradient(
    224deg,
    rgba(96,0,0,0.50) 0%,
    rgba(156,53,53,0.50) 62%,
    rgba(197,96,96,0.50) 83%,
    rgba(255,155,155,0.50) 100%
  );
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.35),
        inset 0px -3px 1px 0px rgba(139,0,0,0.50),
        inset 0px 1px 1px 0px rgba(255,163,163,0.50);
  font-weight: 100;
  &__label {
    margin-right: 0.5em;
    font-size: 0.8em;
    font-weight: bold;
  }
  &__btn {
    margin-left: 0.5em;
    height: 30px;
    width: 30px;
    border-color: $blue;
    border-radius: 50%;
    // font-weight: bold;
    // font-size: 0.5em;
    color: white;
    padding: 0;
    background: none;
    background-color: $blue;
    transition: 200ms linear;
    &:hover {
      transform: translateY(-5px);
    }
  }
}
</style>
