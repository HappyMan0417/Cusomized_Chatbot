require("dotenv").config();
const express = require('express');
const axios = require('axios');

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const fs = require('fs');
const csv = require('csv-parser');

let dataArray = [];

fs.createReadStream('dataset.csv')
  .pipe(csv())
  .on('data', (data) => {
    dataArray.push(data);
  })
  .on('end', () => {
    processData(dataArray);
  });

  
const processData = (data) => {
  console.log(data);
};

app.post('/completion', async (req, res) => {
  const prompt = req.body.prompt;
  const matchingData = dataArray.find((d) => d.name === prompt);

  if (matchingData) {
    res.send(matchingData.height);
    return;
  }

  const API_KEY = process.env.OPENAI_API_KEY;

  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.openai.com/v1/engines/text-babbage-001/completions',
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
