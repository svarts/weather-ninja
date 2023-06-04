const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/css/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, './css', filename);
  res.sendFile(filePath);
});

app.get('/scripts/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, './scripts', filename);

  res.sendFile(filePath);
});

app.get('/img/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, './img', filename);
  res.sendFile(filePath);
});

app.get('/icons/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, './icons', filename);
  res.sendFile(filePath);
});

/* app.get('/js/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, './scripts' + filename);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.type('text/javascript').send(data);
    }
  });
}); */

app.listen(3000, () => {
  console.log('Server started on port 3000');
});