const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const accountLogin = require('./account_login')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  let options = req.body
  console.log('User name is:', accountLogin(options))

  if (accountLogin(options) === '') {
    res.render('index', { err: `Email或密碼有錯誤！` })
  } else {
    res.render('user', { userName: accountLogin(options) })
  }
})

app.listen(port, () => {
  console.log(`done`)
})
