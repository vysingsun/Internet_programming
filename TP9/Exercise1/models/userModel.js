const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please enter your firstname."]
        },

        username: {
            type: String,
            required: [true, "Please enter your firstname."]
        },

        firstname: {
            type: String,
            required: [true, "Please enter your firstname."]
        },

        lastname: {
            type: String,
            required: [true, "Please enter your firstname."]
        },

        password: {
            type: String,
            required: [true, "Please enter your firstname."]
        }
    },
    {
        timestamps: true
    }
)

const Users = mongoose.model('Users', userSchema);

module.exports = Users;