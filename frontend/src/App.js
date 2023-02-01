import React, { useState } from 'react';
import axios from 'axios';
import { useSpeechRecognition } from 'react-speech-kit';

const App = () => {
  const [completion, setCompletion] = useState('');
  const [prompt, setPrompt] = useState('');
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setPrompt(result);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/completion', {
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
        <input
        
        style={{
          width: "460px",
          fontSize: "13px",
        }}
        
        type="text" value={prompt} placeholder="Enter prompt" onChange={(e) => setPrompt(e.target.value)} />
        <button type="button" onMouseDown={listen} onMouseUp={stop}>🎤</button>
        <button type="submit">Send</button>
      </form>
      <p>Message: {completion}</p>
      
    </div>
  );
};

export default App;

