const express = require('express');
const app = express();
app.use(express.json())

const joiValidation = (schema) => {
    return async(req,res,next) => {
        try {
            await schema.validateAsync(req.boby)
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message})
        }
        next();
    }
}

module.exports = {
    joiValidation
}