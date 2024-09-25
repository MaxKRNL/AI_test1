import React, { useState } from 'react';
import axios from '../services/api';
import ChatWindow from './ChatWindow';

function Chatbot() {
  const [inputMessage, setInputMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = async () => {
    const response = await axios.post('/api/chat', { message: inputMessage });
    setChatHistory([...chatHistory, { user: inputMessage, bot: response.data.response }]);
    setInputMessage("");
  };

  return (
    <div>
      <ChatWindow chatHistory={chatHistory} />
      <input 
        type="text" 
        value={inputMessage} 
        onChange={(e) => setInputMessage(e.target.value)} 
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chatbot;
