const express = require('express');
const app = express();
app.use(express.json())

const joiValidation = (schema) => {
    return async (req, res, next) => {
        // const param = JSON.parse(req.body);
        try{
            await schema.validateAsync(req.body);
        }catch(err){
            return res.json({
                success: false,
                err: err
            })
        }
        next();
    }
}

module.exports = {
    joiValidation
}