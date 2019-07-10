const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080; // Server Port 8080

// using ejs for the views
app.set('view engine', 'ejs');

// specify the static asset folder (css, images, etc)
app.use(express.static('/js'));
app.use(express.static('/test'));

app.get('/', (req, res) => {
  res.render('play');
});

app.get('/test', (req, res) => {
  res.render('test');
});

app.listen(PORT, () => {
  console.log(`funkyBunny listening on port ${PORT}!`);
});