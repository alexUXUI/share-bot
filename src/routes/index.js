var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/slack-bot', (request, response, next) => {
  response.send('slack bot GET')
})

router.post('/slack-bot', (request, response, next) => {
  console.log('Incoming post')
  console.log(request)
  response.send(`slack bot POST ${JSON.stringify(request.body)}`)
})

module.exports = router
