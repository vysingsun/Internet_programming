const express = require('express');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

const oneHour = 1000*60*60;
// first test
app.get('/', (req,res) => {
    res.send("Hii");
})

app.use(session({
    secret: "SecretKeyIsEnCrypt",
    saveUninitialized: true,
    cookie: {maxAge: oneHour},
    resave: false,
    name: "token"
}))
app.use(cookieParser());
app.use(express.json());
app.use(require('./routes'));

mongoose.connect('mongodb://localhost:27017/ip_tp9ex2')
.then(() => {
    console.log("Connected to MongoDB.")
    app.listen(3000, () => {
        console.log(`Node API app is running on port 3000`)
    })
}).catch((error) => {
    console.log(error)
})