const bcrypt = require('bcryptjs')

const encryptPasswd = (password) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password,salt);
    return hash;
}

const decryptPasswd = (password, hash) => {
    var decrypt = bcrypt.compareSync(password, hash);
    return decrypt;
}

module.exports = {
    encryptPasswd,
    decryptPasswd
}