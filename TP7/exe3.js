const express = require('express')
const fs = require('fs');
const app = express()

app.get('/', function (req, res) {
  fs.readFile('./src/exe3.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    res.send(data);
  });
})

app.get('/detail', function (req, res) {
  fs.readFile('./src/detail.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    res.send(data);
  });
})

app.listen(3000, () => {
  console.log("Your project is running on port: 3000");
});