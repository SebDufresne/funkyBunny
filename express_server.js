const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 8080; // Server Port 8080

app.get('/', (req, res) => {
  res.render('play');
});

app.get('/test', (req, res) => {
  res.render('test');
});

app.listen(PORT, () => {
  console.log(`funkyBunny listening on port ${PORT}!`);
});