import { useState } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const InterviewChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI interview coach. What role are you preparing for?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponses = [
        "That's a great answer! Consider adding specific examples to illustrate your point.",
        "Good response. You might want to be more concise and focus on measurable results.",
        "Nice answer. Try using the STAR method (Situation, Task, Action, Result) for behavioral questions.",
        "I understand your point. Remember to highlight your unique skills that match the job description.",
        "Solid answer. Consider mentioning how your experience aligns with the company's values or mission.",
      ];

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow">
      <div className="p-4 border-b bg-blue-50">
        <h2 className="text-xl font-semibold">AI Interview Coach</h2>
        <p className="text-sm text-gray-600">Practice your interview responses and get real-time feedback</p>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.sender === 'user' ? 'ml-auto' : 'mr-auto'
            } max-w-[80%]`}
          >
            <div
              className={`p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              {message.text}
            </div>
            <div
              className={`text-xs text-gray-500 mt-1 ${
                message.sender === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              {message.timestamp.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center text-sm text-gray-500">
            <div className="w-2 h-2 mr-1 bg-gray-300 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 mx-1 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 ml-1 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your interview response..."
            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 text-white bg-blue-600 rounded-r-md hover:bg-blue-700"
          >
            Send
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Tip: Try responding to common interview questions as if you were in a real interview
        </p>
      </div>
    </div>
  );
};

export default InterviewChatbot;