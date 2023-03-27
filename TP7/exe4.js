const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  fs.readFile('./src/exe4.html', 'utf8', (err, data) => {
    if (err) {
      // If there's an error reading the file, send a 500 status code and an error message
      res.status(500).send('Error reading file');
    } else {
      // If there's no error, send the HTML file as a response
      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log('Your project is running on port: 3000');
});