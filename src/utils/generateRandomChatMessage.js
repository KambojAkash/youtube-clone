const messageContents = [
    'Hello there!',
    'How are you doing?',
    'Any interesting topics to discuss?',
    'I like this live chat!',
    'What is your favorite movie?',
    'I am learning programming. Any tips?',
  ];
  
  // Function to generate a random chat message
  export function generateRandomChatMessage() {
    const randomMessage = messageContents[Math.floor(Math.random() * messageContents.length)];
  
    // You can add more properties like username, timestamp, etc., if needed
    return randomMessage;
    
  }
  