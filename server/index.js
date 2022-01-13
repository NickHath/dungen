const express = require('express');
require('dotenv').config()

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.post('/api/generate', (req, res) => {

});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});