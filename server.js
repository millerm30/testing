const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('static'))

app.get('/', (req, res) => {
  res.send(__dirname + "index.html")
});

app.listen(port, (() => {
  console.log(`The server is running on http://localhost:${port}`)
}));

