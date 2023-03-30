const fs = require('fs');

const path = require('path');
//read
const readUsers =() =>{
    let rawData = fs.readFileSync(path.join(process.cwd(),'./db/user.json'), 'utf8');
    if(!rawData){
        return []
    }
    return JSON.parse(rawData);
}
//write
const writeUser = async (data) => {
    fs.writeFileSync(path.join(process.cwd(), 'db/user.json'), JSON.stringify(data),'utf8');
}

module.exports ={
    readUsers,
    writeUser
}