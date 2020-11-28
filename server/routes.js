const fs = require('fs')
const path = require('path')
const models = require('./models')
const { Op } = require('sequelize')

const testData = [
  {
    "retweeted": false,
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "display_text_range": ["0", "61"],
    "favorite_count": "0",
    "id_str": "403788582",
    "truncated": false,
    "retweet_count": "0",
    "id": "403788582",
    "created_at": "Sat Nov 10 16:21:18 +0000 2007",
    "favorited": false,
    "full_text": "I am becoming a bit of a documentarian. Can you say Poh-lice?",
    "lang": "en"
  },
  {
    "retweeted": false,
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "display_text_range": ["0", "137"],
    "favorite_count": "0",
    "id_str": "534973142",
    "truncated": false,
    "retweet_count": "0",
    "id": "534973142",
    "created_at": "Wed Dec 26 14:36:20 +0000 2007",
    "favorited": false,
    "full_text": "\"Tell me, Mr. Ambassador, do you want this pie?\" \"Yes, yes, I would like that pie.\" \"Well, that's a shame, Mr. Ambassador, it really is.\"",
    "lang": "en"
  }
]

module.exports = (app) => {
  app.get('/api/backfill', async (req, res) => {
    try {
      const data = fs.readFileSync(path.resolve('./tweet.json'))
      const tweets = JSON.parse(data)
      for (let i = 0; i < tweets.length; i++) {
        console.log(i, tweets[i].tweet)
        await models.tweet.findOrCreate({
          where: { id: tweets[i].tweet.id },
          defaults: tweets[i].tweet
        })
      }
      res.status(200).send('Done')
    } catch (error) {
      console.error(error)
      res.status(503).send(error)
    }
  })

  app.get('/api/tweets', async (req, res) => {
    try {
      const { keywords } = req.query
      const kw = keywords.split(',')
      console.log(kw)
      const tweets = await models.tweet.findAll({
        where: {
          full_text: {
            [Op.contains]: kw
          }
        }
      })
      res.status(200).json(tweets)
    } catch (error) {
      res.send(error)
    }
  })

  app.get('/api/test', async (req, res) => {
    console.log(req.query)
    try {
      const { start, end } = req.query
      const data = await models.tweet.findAll({
        where: {
          created_at: {
            [Op.between]: [new Date(start), new Date(end)]
          }
        },
        limit: 500
      })
      console.log(data)
      res.json(data)
    } catch (error) {
      console.error(error)
      res.send(error)
    }
  })
}
