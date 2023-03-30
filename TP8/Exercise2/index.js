var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()
const port = 3001;

app.use(cors({
    origin: 'http://127.0.0.1:5173'
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(require('./routes'));

app.listen(port, () => console.log("App on http://localhost:3001"));