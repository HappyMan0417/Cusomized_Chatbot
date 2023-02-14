# ChatGPT- Custom ChatGPT Q&A system 

The repository contains code for a Custom ChatGPT built using React, Express, and Node.js. The chatbot is powered by OpenAI's text-davinci-003 language model and Custom dataset.

## Getting Started

ChatGPT is a web-based chatbot application that uses OpenAI's GPT-3 language model to generate natural language responses to user inputs. The application was developed using React, Express, and Node.js, and the OpenAI API was accessed using the `@openai/ai-engine` package.

The application features a clean and modern user interface, and allows users to chat with the chatbot in real time. The GPT-3 model used in the application is the text-davinci-003 model, which is one of the most advanced language models currently available, and is capable of generating human-like responses to a wide variety of prompts.

ChatGPT is designed to be easily deployable, and can be run on any system that supports Node.js and the OpenAI API. It can also be customized to fit specific use cases and domains, making it a powerful tool for developers and businesses looking to incorporate natural language processing into their applications.

## Environment

Before you begin, ensure you have met the following requirements:

1. You have installed Node.js and npm on your machine.
2. You have an API key or other credentials for any necessary third-party services or APIs.

## Pre-requisite

You'll need to have your own OpenAi apikey to operate this package. Follow these steps to get it:

1. Go to https://beta.openai.com/
2. Select your profile menu and go to Manage API Keys
3. Select + Create new secret key
4. Copy generated key

## Installation

Clone the repository and follow these instructions:

### Frontend

1. `git clone git@github.com:MohammadAtikurRahman/Custom-ChatGPT.git`
2. `cd frontend`
3. `npm install`
4. Create a `.env` file in the frontend directory of the project. Add your environment variables to the `.env` file using the following format: `REACT_APP_URL=backend api end point`
5. `npm start`


### API Request


```javascript
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA:",
  temperature: 0,
  max_tokens: 100,
  top_p: 1,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  stop: ["\n"],
});


```




### Backend

1. `cd ..` (to move to the root directory)
2. `cd backend`
3. `npm install`
4. Create a `.env` file in the backend directory of the project. Add your environment variables to the `.env` file using the following format: `OPENAI_API_KEY=generated key`
5. `node index.js`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs both the client app. Open [http://localhost:3006]

### `node index.js`

Runs just the server app. Open [http://localhost:5000]

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. If deploying to Heroku, this does not need to be run since it is handled by the `heroku-postbuild` script.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn how to set up a local MongoDB instance for testing, check out how to [Connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how
