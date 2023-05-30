const express = require('express');
const app = express();
// app.use(express.json())
const router = express.Router();

const { login } = require('../service/login')
const {register}  = require('../service/register');
const { joiValidation } = require('../middleware/joiValidation');
const { registerSchema , loginSchema} = require('../schema/index');

app.get('/home', (req,res) => {
    res.send("Hello Node API.");
});

//register
router.post('/register', joiValidation(registerSchema), async(req,res) => {
    try {  
        console.log(req.body);
        const result = await register(req.body)
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//login page
router.post('/login', joiValidation(loginSchema), async(req,res) => {
    try {
        console.log(req.body);
        const { email, password} = req.body;
        const result = await login(email, password);
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

module.exports = router;