import { useState } from 'react';
import QuestionBank from '../components/interview/QuestionBank';
import InterviewChatbot from '../components/interview/InterviewChatbot';
import InterviewTips from '../components/interview/InterviewTips';

const InterviewPrep = () => {
  const [activeTab, setActiveTab] = useState<'questionBank' | 'chatbot' | 'tips'>('questionBank');

  const tabs = [
    { id: 'questionBank', label: 'Question Bank' },
    { id: 'chatbot', label: 'AI Interview Chatbot' },
    { id: 'tips', label: 'Interview Tips' }
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Interview Preparation Center</h1>
      
      <div className="overflow-hidden bg-white rounded-lg shadow-md">
        <div className="border-b">
          <nav className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-6 font-medium ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700 bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'questionBank' && <QuestionBank />}
          {activeTab === 'chatbot' && <InterviewChatbot />}
          {activeTab === 'tips' && <InterviewTips />}
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;