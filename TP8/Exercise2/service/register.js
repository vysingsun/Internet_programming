const { readUsers, writeUser } = require("../db/db");

const register = (param) => {
    const {email, username, firstname, lastname, password } = param;
    var users = readUsers();
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if(user.email == email){
            return {
                success : false,
                err : "Email is already used"
            }
        }
        if(user.username == username){
            return {
                success : false,
                err : "Username is already exist"
            }
        }
    }
    users.push(param);
    writeUser(users);
    return {
        success : true,
        data : param
    }
}

module.exports = {
    register
}