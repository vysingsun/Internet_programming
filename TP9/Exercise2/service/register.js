const users = require('../models/users')
const {encryptPasswd} = require('../config/encrypt')
const register = async (param) => {
    const { email, username, firstname, lastname, password } = param;
    try {
        var existed = await users.findOne({email})
        if(existed){
            throw "Email is already used";
        }
        existed = await users.findOne({ username })
        if(existed){
            throw "username is already used"
        }

        var hash = encryptPasswd(password);

        const newUser = {
            email,
            username,
            firstname,
            lastname,
            password: hash
        }
        const createUser = await users.create(newUser)

        return {
            success: true,
            data: createUser
        }
    } catch (error) {
        return {
            success: false,
            err: error
        }
    }
}
module.exports = {
    register
} 
