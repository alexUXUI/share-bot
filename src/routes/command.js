// http://localhost:3000/command/share

const express = require('express')
const router = express.Router()
const axios = require('axios')

require('dotenv').config()

// Read the signing secret from the environment variables
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET
const token = process.env.BOT_TOKEN

router.post('/share', (request, response, next) => {
  console.log('Incoming post TO SHARE', request.body)

  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: `{"text": ${JSON.stringify(request.body.name)}}`,
    url: 'https://hooks.slack.com/services/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'
  }

  axios(options).then(_response => {
    console.log('TALKED TO SLACK')
    response.send(`slack bot POST ${JSON.stringify(_response.body)}`)
  })
})

module.exports = router
