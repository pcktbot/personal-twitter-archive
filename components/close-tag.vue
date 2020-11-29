<template>
  <div class="tag-close">
    <span class="tag-close__label">
      {{ tag.label }}
    </span>
    {{ tag.value }}
    <button class="tag-close__btn" v-on:click="$emit('remove', tag.label)">
      <b-icon-x />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      default () {
        return {
          label: '',
          value: ''
        }
      }
    }
  }
}
</script>

<style>

</style>
