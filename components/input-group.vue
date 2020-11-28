<template>
  <b-input-group class="p-3">
    <b-input-group-prepend class="d-flex align-items-center text-secondary px-3 text-uppercase font-weight-bold">
      {{ input.key }}
    </b-input-group-prepend>
    <b-form-datepicker
      v-if="input.type === 'date-min'"
      :value="input.value"
      :min="input.min"
      style="border: 4px solid #d8d8d8; border-radius: 10px;"
      @input="update({ key: input.key, value: $event })"
    />
    <b-form-datepicker
      v-else-if="input.type === 'date'"
      :value="input.value"
      style="border: 4px solid #d8d8d8; border-radius: 10px;"
      @input="update({ key: input.key, value: $event })"
    />
    <b-form-input
      v-else
      :value="input.value"
      style="border: 4px solid #d8d8d8; border-radius: 10px;"
      @input="update({ key: input.key, value: $event })"
    />
  </b-input-group>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    input: {
      type: Object,
      default () {
        return {
          key: '',
          value: null
        }
      }
    }
  },
  methods: mapActions({
    update: 'inputs/update'
  })
}
</script>
