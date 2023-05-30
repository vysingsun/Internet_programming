const express = require('express');
const app = express()
const mongoose = require('mongoose')
const Users = require('./models/userModel')

app.use(express.json())
// routes
app.get('/', (req,res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req,res) => {
    res.send('Hello Blog')
})

app.post('/users', async(req, res) => {  
    try {
        const users = await Users.create(req.body)
        res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
mongoose.connect('mongodb://localhost:27017/ip_tp9')
// mongoose.connect('mongodb+srv://vysingsun:vysingsun@vysingsunapi.xegod8j.mongodb.net/Node-API-By-vysingsun?retryWrites=true&w=majority')
.then(() => {
    console.log("Connected to MongoDB")
    app.listen(3000, () => {
        console.log(`Node API app is running on port 3000`)
    })
}).catch((error) => {
    console.log(error)
})