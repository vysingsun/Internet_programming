const { encryptData } = require('../config/encrypt');
const { findOne } = require('../models/users')
const users = require('../models/users')

const findByOne = async (email) => {
    try{
        const user = await users.findOne({email});
        return user
    }catch(err){
        throw('user invalid')
    }
}

const findall = async () => {
    try{
        const user = await users.find();
        return user
    }catch(err){
        throw('findall err',err)
    }
}

const updatePass = async (newPassword, email) => {
    try{
        const hash = await encryptData(newPassword.password)
        await users.findOneAndUpdate({email}, {"password":hash})
        const user = await users.findOne({email})
        return {
            success: true,
            data: user
        }
    }catch(err){
        throw('update err', err)
    }
}

const updateUser = async (newInfo, email) => {
    try{
        await users.findOneAndUpdate({email}, newInfo)
        const user = await users.findOne({email})
        return {
            success: true,
            data: user
        }
    }catch(err){
        throw('update err', err)
    }
}
const deleteUser = async (email) => {
    try{
        const user = await users.findOneAndDelete({email})
        return {
            success: true,
            data: user
        }
    }catch(err){
        throw('delete err', err)
    }
}
module.exports = {
    findByOne,
    findall,
    updatePass,
    updateUser,
    deleteUser
}