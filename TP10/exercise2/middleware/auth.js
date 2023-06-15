const Jwt = require('jsonwebtoken')

const currentUser = (req, res, next) => {
    if (!req.session.jwtToken)
      throw "You must sign In~"
    const user = Jwt.verify(req.session.jwtToken, 't0kenEncrypti0n')
    req.currentUser = user;
    next()
}

const ensureSignedIn = (req, res, next) => {
    if (!req.session.jwtToken) {
        return res.json({
            success: false,
            error:`You must sign In~`
        })
    }
    next();
}

const ensureSignedOut = (req, res, next) => {
    if (req.session.jwtToken) {
        return res.json({
            success: false,
            error: `You already signed in~`
        })
    }
    next();
}

module.exports = {
    ensureSignedIn,
    ensureSignedOut,
    currentUser
}
