const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080; // Server Port 8080

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(PORT, () => {
  console.log(`funkyBunny listening on port ${PORT}!`);
});