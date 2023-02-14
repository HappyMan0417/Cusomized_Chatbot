 # ChatGPT - Custom ChatGPT Q&A System 
 
The repository contains code for a Custom ChatGPT built using React, Express, and Node.js. The chatbot is powered by OpenAI's text-davinci-003 language model and custom dataset.

## Getting Started
ChatGPT is a web-based chatbot application that uses OpenAI's GPT-3 language model to generate natural language responses to user inputs. The application was developed using React, Express, and Node.js, and the OpenAI API was accessed using the `@openai/ai-engine` package.

The application features a clean and modern user interface and allows users to chat with the chatbot in real-time. The GPT-3 model used in the application is the text-davinci-003 model, which is one of the most advanced language models currently available and is capable of generating human-like responses to a wide variety of prompts.

ChatGPT is designed to be easily deployable and can be run on any system that supports Node.js and the OpenAI API. It can also be customized to fit specific use cases and domains, making it a powerful tool for developers and businesses looking to incorporate natural language processing into their applications.

## Environment
Before you begin, ensure you have met the following requirements:

1. You have installed Node.js and npm on your machine.
2. You have an API key or other credentials for any necessary third-party services or APIs.

## Prerequisites
You'll need to have your own OpenAI API key to operate this package. Follow the steps below to generate a key:

1. Go to https://beta.openai.com/.
2. Select your profile menu and go to Manage API Keys.
3. Select + Create new secret key.
4. Copy the generated key.

## Installation

#### `Custom-ChatGPT` - name of the folder/directory
- #### `frontend` - This holds our frontend files. 
- #### `backend` - This holds our backend files.
- #### `botscript` - Copy the script code and use. 

### Frontend
To install and run the frontend, follow these steps:

1. `git clone git@github.com:MohammadAtikurRahman/Custom-ChatGPT.git`
2. `cd frontend`
3. `npm install`
4. Create a `.env` file in the frontend directory of the project. Add your environment variables to the `.env` file using the following format: `REACT_APP_URL=backend api end point`.
5. `npm start`

### Backend
To install and run the backend, follow these steps:

1. Go to the directory `Custom-ChatGPT`.
2. `cd backend`.
3. `npm install`.
4. Create a `.env` file in the backend directory of the project. Add your environment variables to the `.env` file using the following format: `OPENAI_API_KEY=generated key`.
5. `node index.js`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs both the client app Open [http://localhost:3006].

### `node index.js`

Runs just the server app Open [http://localhost:5000].

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. If deploying to Heroku, this does not need to be run since it is handled by the heroku-postbuild script. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can
