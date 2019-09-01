const users = require('./users.json').users

function accountLogin(options) {
  let user = users.find(user => {
    //find()會回傳符合return條件的users值
    return options.email === user.email && options.password === user.password
  })
  let userName = user ? user.firstName : 'err'

  return userName
}

module.exports = accountLogin
