<template>
  <div class="container mr-4">
    <drawer>
      <input-group :input="{ key: 'keyword', value: keyword }" />
      <input-group :input="{ key: 'topic', value: topic }" />
      <input-group :input="{ key: 'start', value: start, type: 'date' }" />
      <input-group :input="{ key: 'end', min: start, value: end, type: 'date-min' }" />
      <run-btn @submit="onLoad" />
    </drawer>
    <dismissable-tags />
    <div class="scroll-container d-flex flex-column px-4">
      <div
        v-for="tweet in tweets"
        :key="tweet.id"
      >
        <tweet-card v-bind="{ tweet }" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState({
    inputs: state => state.inputs,
    keyword: state => state.inputs.keyword,
    topic: state => state.inputs.topic,
    start: state => state.inputs.start,
    end: state => state.inputs.end,
    tweets: state => state.tweets.res
  }),
  methods: {
    ...mapActions({
      update: 'inputs/update',
      load: 'tweets/load'
    }),
    onLoad () {
      const query = `?start=${this.start}&end=${this.end}`
      this.load(query)
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  & .scroll-container {
    overflow-y: scroll;
    margin-bottom: 8em;
  }
}
</style>
