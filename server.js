const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/styles.css', (req, res) => {
  res.sendFile(__dirname + '/styles.css');
});

app.get('/app.js', (req, res) => {
  res.sendFile(__dirname + '/app.js');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});