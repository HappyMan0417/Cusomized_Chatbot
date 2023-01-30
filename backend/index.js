const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/completion', async (req, res) => {
  const prompt = req.body.prompt;
  const API_KEY = "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";

  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.openai.com/v1/engines/text-davinci-002/completions',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      data: {
        prompt: prompt,
        max_tokens: 100,
        n: 1,
        stop: "",
        temperature: 0.5
      }
    });
    res.send(response.data.choices[0].text);
  } catch (error) {
    res.status(500).send({ error: 'Could not generate text completion' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
