const express = require('express');
const app = express();
const sass = require("node-sass-middleware");

const PORT = process.env.PORT || 8080; // Server Port 8080


// using ejs for the views
app.set('view engine', 'ejs');

// monitor sass files
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));

// specify the static asset folder (css, images, etc)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('play');
});

app.get('/test', (req, res) => {
  res.render('test');
});

app.listen(PORT, () => {
  console.log(`funkyBunny listening on port ${PORT}!`);
});