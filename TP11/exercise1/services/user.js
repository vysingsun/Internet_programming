const { encryptData } = require("../configs/encrypt");
const Users = require("../models/users")

const findById = async (id) => {
  try {
    const user = await Users.findById(id);
    return user;
  } catch (err) {
    throw "User is not found"
  }
}

const findAll = async () => {
  try {
    const users = await Users.find();
    return users;
  } catch (err) {
    throw "cannot get all users"
  }
}

const updatePass = async (currentUserID, current_password, new_password, repeat_password) => {
  try {
    const currentUser = await Users.findById(currentUserID);
    console.log(currentUser);
    if (!currentUser.matchesPassword(current_password)) {
      return {
        success: false,
        err: "current password invalid"
      }
    }
    if(new_password != repeat_password){
      return {
        success: false,
        err: "repeat_password invalid"
      }
    }
    const hash = encryptData(new_password)
    await Users.findOneAndUpdate(currentUserID, {"password":hash})
    return {
      success: true,
    }
  } catch (err) {
    return{
      success: false,
      err: "update password error"
    }
  }
}

const update = async (currentUserID, firstName, lastName) => {
  try{
    await Users.findOneAndUpdate(currentUserID, {"firstName":firstName, "lastName":lastName})
    return{
      success: true
    }
  } catch (err) {
    return{
      success: false,
      err: err.message
    }
  }
}

const remove = async (currentUserID) => {
  try{
    await Users.deleteOne({_id:currentUserID})
    return {
      success: true
    }
  } catch (err) {
    return {
      success: false,
      err: "remove err"
    }
  }
}

module.exports = {
  findById,
  findAll,
  updatePass,
  update,
  remove
}