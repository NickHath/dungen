const express = require('express');
const axios = require('axios');
require('dotenv').config();

const examples = [
  "\n\nIdea #1: Mysterious Man Offers Gold Reward \nNPCs: mysterious man, innkeeper, missing children \nDescription: The adventurers arrive at the Smoky Mirror Tavern where a mysterious man offers them a reward for finding missing children. Evidently, a nearby goblin clan has been kidnapping them during the night and leaving no trace. He doesn't know why, but they must be stopped. The adventurers can keep any treasure they find.\n",
  "\nIdea #2: Fortune Teller Sets Adventurers on a new Path \nNPCs: Madam Stroni, her assistant Igor, innkeeper \n The group encounters a fortune teller at the inn named Madam Stroni. Her assistant, Igor, is hunch-backed and ominously quiet. The group pays her five gold pieces to tell their fortune, and Madam Eva offers the following prophesy: \"You must hunt down what you fear the most.\" The group doesn't fully understand why, but they feel shivers when shaking her hand. The innkeepers warns them that Madam Eva is not what she seems.\n"
];

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/generate', (req, res) => {
  const promptWithExamples = req.body.context + examples.join('')
  // expand body parameters
  console.log(promptWithExamples)
  const body = {
    prompt: promptWithExamples,
    max_tokens: 512
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