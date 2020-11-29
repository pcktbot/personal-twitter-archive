<template>
  <div class="my-3 tweet-card">
    <div class="d-flex">
      <div>
        {{ isDate(tweet.created_at) }}
      </div>
    </div>
    <div class="text-left h1 font-weight-bold text-tertiary p-3 my-3">
      {{ tweet.full_text }}
    </div>
    <div class="d-flex justify-content-between">
      <div>
        chars: {{ tweet.display_text_range[1] }}
      </div>
      <div>
        <b-icon-star-fill v-if="tweet.favorited" />
        <b-icon-star v-else />
        <span>
          {{ tweet.favorite_count }}
        </span>
      </div>
      <div>
        retweets: {{ tweet.retweet_count }}
      </div>
      <div v-html="tweet.source"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tweet: {
      type: Object,
      default () {
        return {
          retweeted: false,
          source: '',
          entities: {},
          display_text_range: []
        }
      }
    }
  },
  methods: {
    isDate (dt) {
      return new Date(dt)
    }
  }
}
</script>

<style lang="scss">
.tweet-card {
  padding: 1.5em;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.35),
        inset 0px -3px 1px 0px rgba(139,0,0,0.50),
        inset 0px 1px 1px 0px rgba(255,163,163,0.50);
}
</style>
