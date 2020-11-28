const { BIGINT, STRING, DATE, BOOLEAN, JSONB } = require('sequelize')

module.exports = sequelize => sequelize.define('tweet', {
  id: { type: BIGINT, primaryKey: true, allowNull: false },
  retweeted: { type: BOOLEAN },
  source: { type: STRING },
  entities: { type: JSONB },
  display_text_range: { type: JSONB },
  favorite_count: { type: BIGINT },
  id_str: { type: STRING },
  truncated: { type: BOOLEAN },
  retweet_count: { type: BIGINT },
  created_at: { type: DATE },
  favorited: { type: BOOLEAN },
  full_text: { type: STRING },
  lang: { type: STRING }
})
