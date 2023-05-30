const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required: [true, "Please enter your email."]
        },

        username: {
            type: String,
            unique: true,
            required: [true, "Please enter your username."]
        },

        firstname: {
            type: String,
            required: [true, "Please enter your firstname."]
        },

        lastname: {
            type: String,
            required: [true, "Please enter your lastname."]
        },

        password: {
            type: String,
            required: [true, "Please enter your password."]
        }
    },
    {
        timestamps: true
    }
)

const Users = mongoose.model('Users', userSchema);

module.exports = Users;