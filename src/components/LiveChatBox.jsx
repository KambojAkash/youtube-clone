import React, { useState, useEffect, useRef } from 'react';
import { languageParts } from '../lang/lang';
import { useSelector } from 'react-redux';
import { CHAT_LIMIT } from '../assets/Constants';
import { useRandomNameGenerator } from '../CustomHooks/useRandomNameGenerator';
import { generateRandomChatMessage } from '../utils/generateRandomChatMessage';

const LiveChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessageText, setNewMessageText] = useState('');
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const language=useSelector((store) => store.generalConfig.lang);
  
  useEffect(() => {
    if (messages.length > CHAT_LIMIT) {
        setMessages((prev) => prev.slice(-CHAT_LIMIT));
      }
    
      
    const intervalId = setInterval(() => {
      const newMessage = {
        username: useRandomNameGenerator(),
        text: generateRandomChatMessage(),
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }, 500); 

   
    return () => clearInterval(intervalId);
  }, [messages]);

 
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  
  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

     
      const newMessage = {
        username: 'Akash' ,
        text: newMessageText,
        timestamp: new Date().toLocaleTimeString(),
      };

    
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      
      setNewMessageText('');

      
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }
  };

  return (
    <div className="bg-[#0f0f0f]  border border-gray-300 rounded-md p-4 shadow-md w-80">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">{languageParts.liveChat[language]}</h2>
      </div>

      <div
        ref={chatContainerRef}
        className="h-52 overflow-y-auto"
        style={{ scrollbarWidth: 'thin' }}
      >
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <span className="font-bold text-white">{message.username}:</span>{' '}
            <span className="text-gray-200">{message.text}</span>{' '}
            <span className="text-gray-200 text-sm">{message.timestamp}</span>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <input
          ref={inputRef}
          type="text"
          placeholder={languageParts.typeMessage[language]}
          className="w-full bg-transparent p-2 border border-gray-300 rounded-md"
          value={newMessageText}
          onChange={(e) => setNewMessageText(e.target.value)}
          onKeyDown={handleInputKeyDown}
        />
      </div>
    </div>
  );
};

export default LiveChatBox;
