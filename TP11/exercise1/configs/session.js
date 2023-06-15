var session = require('express-session')

  module.exports = async (app) => {
    app.use(session({
        secret: 'my-secret',
        resave: true,
        rolling: true,
        saveUninitialized: true,
        name: 'access_token',
        cookie: {
          maxAge: 1000 * 60 * 60 * 2, // 2 hours
          secure: false,
        }
      })
    )
  }

