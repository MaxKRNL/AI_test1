import React from 'react';

function ChatWindow({ chatHistory }) {
  return (
    <div>
      {chatHistory.map((chat, index) => (
        <div key={index}>
          <p><strong>You:</strong> {chat.user}</p>
          <p><strong>Bot:</strong> {chat.bot}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;
