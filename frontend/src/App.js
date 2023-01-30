import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [completion, setCompletion] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/completion', {
        prompt: prompt
      });
      setCompletion(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter prompt" onChange={(e) => setPrompt(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p>Completion: {completion}</p>
    </div>
  );
};

export default App;
