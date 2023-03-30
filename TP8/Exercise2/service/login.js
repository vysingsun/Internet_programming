const { readUsers } = require("../db/db");

const login = (username, password) => {
    //read all user
    console.log(username);
    console.log(password);
    const users = readUsers();
    // console.log(users);
    //compare user
    
    for(let i=0; i<users.length; i++){
        let user = users[i];
        if(user.username == username){
            
            if(user.password == password){
                
                return {
                    success : true,
                    data : user
                }
            }
        }
    };
    
    return {
        success : false,
        err : "Your username or Password is incorrect",
        
    }
}

module.exports = {
    login
}