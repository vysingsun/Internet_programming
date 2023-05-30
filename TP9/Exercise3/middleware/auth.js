const ensureSignedIn = (req,res,next) => {
    if(!req.session.jwtToken){
        return res.json({
            success: false,
            error:`You must signIn!`
        })
    }
    next();
}

const ensureSignedOut = (req,res,next) => {
    if(req.session.jwtToken){
        return res.json({
            success: false,
            error:`You already signIn!`
        })
    }
    next();
}

module.exports = {
    ensureSignedIn,
    ensureSignedOut
}