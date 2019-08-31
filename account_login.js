const users = require('./users.json').users

function accountLogin(options) {
  let userName = 'err'

  users.some(user => {
    // console.log('user', user)
    if (options.email === user.email && options.password === user.password)
      return (userName = user.firstName)
  })
  return userName
}

module.exports = accountLogin
