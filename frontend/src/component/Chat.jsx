import React, { useState } from 'react';
import axios from 'axios';
import { useSpeechRecognition } from 'react-speech-kit';

const Chat = () => {
    const [completions, setCompletions] = useState([]);
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
            setCompletions([...completions, { prompt, completion: response.data }]);
        } catch (error) {
            console.error(error);
        }
    };




    return (
        <div style={{ float: "right", display: "", justifyContent: "center", flexDirection: "column",  position: "absolute",
        bottom: "0",     right: "16vw"
         }}>
            <div style={{ width: "45vw", padding: "20px" }}>

                <div style={{ display: "", justifyContent: "center", flexDirection: "column", marginTop: "20px" }}>
                    {completions.map((msg, index) => (
                        <div key={index} style={{ display: "", justifyContent: "space-between", marginBottom: "10px" }}>
                            <div style={{
                                backgroundColor: "lightgray",
                                padding: "10px",
                                borderRadius: "10px",
                                width: "90%"
                            }}>
                                <p>You: {msg.prompt}</p>
                            </div>
                            &nbsp;
                            <div style={{
                                backgroundColor: "lightblue",
                                padding: "10px",
                                borderRadius: "10px",
                                width: "90%"
                            }}>
                                <p>Completion: {msg.completion}</p>
                            </div>
                            &nbsp;

                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center" }}>
                    <input
                        style={{
                            width: "605px",
                            fontSize: "13px",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            marginRight: "10px"
                        }}
                        type="text"
                        value={prompt}
                        placeholder="Enter Message"
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    <button
                        style={{
                            backgroundColor: "white",
                            color: "white",
                            padding: "10px 20px",
                            border: "1px solid #018CBA",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                        type="button"
                        onMouseDown={listen}
                        onMouseUp={stop}
                    >
                        🔊
                    </button>
                    &nbsp;
                    <button
                        style={{
                            backgroundColor: "#008CBA",
                            color: "white",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                        type="submit"
                    >
                        Send
                    </button>
                </form>



            </div>
        </div>
    );





};

export default Chat;
