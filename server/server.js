const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/styles.css', (req, res) => {
  res.sendFile(__dirname + '/styles.css');
});

/* app.get('/app.js', (req, res) => {
  res.sendFile(__dirname + '/app.js');
}); */

app.get('/js/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'scripts', filename);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.type('text/javascript').send(data);
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});