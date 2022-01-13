const express = require('express');
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.post('/api/generate', (req, res) => {
  // expand body parameters
  const body = {
    prompt: req.body.text,
    max_tokens: 15
  };

  axios.post('https://api.openai.com/v1/engines/ada/completions', body, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_KEY}`
    }
  })
    .then(res => res.data)
    .then(data => {
      console.log(data.choices);
      res.send({ generation: data.choices[0].text })
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});