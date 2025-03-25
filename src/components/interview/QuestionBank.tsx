import { useState } from 'react';

type QuestionCategory = 'behavioral' | 'technical' | 'specific';

interface Question {
  id: string;
  text: string;
  category: QuestionCategory;
  answer?: string;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

const sampleQuestions: Question[] = [
  {
    id: '1',
    text: 'Tell me about yourself.',
    category: 'behavioral',
    tags: ['common', 'introductory'],
    difficulty: 'easy',
  },
  {
    id: '2',
    text: 'What is your greatest strength?',
    category: 'behavioral',
    tags: ['common', 'strengths'],
    difficulty: 'easy',
  },
  {
    id: '3',
    text: 'What is your greatest weakness?',
    category: 'behavioral',
    tags: ['common', 'weaknesses'],
    difficulty: 'medium',
  },
  {
    id: '4',
    text: 'Why do you want to work for our company?',
    category: 'behavioral',
    tags: ['common', 'motivation'],
    difficulty: 'medium',
  },
  {
    id: '5',
    text: 'Describe a challenging situation at work and how you handled it.',
    category: 'behavioral',
    tags: ['situational', 'problem-solving'],
    difficulty: 'medium',
  },
  {
    id: '6',
    text: 'What are your salary expectations?',
    category: 'behavioral',
    tags: ['negotiation', 'expectations'],
    difficulty: 'medium',
  },
  {
    id: '7',
    text: 'Explain the difference between var, let, and const in JavaScript.',
    category: 'technical',
    tags: ['javascript', 'fundamentals'],
    difficulty: 'easy',
  },
  {
    id: '8',
    text: 'What is the difference between == and === in JavaScript?',
    category: 'technical',
    tags: ['javascript', 'fundamentals'],
    difficulty: 'easy',
  },
  {
    id: '9',
    text: 'Explain the concept of closures in JavaScript.',
    category: 'technical',
    tags: ['javascript', 'advanced'],
    difficulty: 'hard',
  },
  {
    id: '10',
    text: 'What is the virtual DOM in React and how does it work?',
    category: 'technical',
    tags: ['react', 'concepts'],
    difficulty: 'medium',
  },
  {
    id: '11',
    text: 'Explain the difference between props and state in React.',
    category: 'technical',
    tags: ['react', 'fundamentals'],
    difficulty: 'easy',
  },
  {
    id: '12',
    text: 'What is your experience with our tech stack?',
    category: 'specific',
    tags: ['experience', 'skills'],
    difficulty: 'medium',
  },
];

const QuestionBank = () => {
  const [questions, setQuestions] = useState(sampleQuestions);

  return (
    <div>
      <h1>Question Bank</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <h2>{question.text}</h2>
            <p>Category: {question.category}</p>
            <p>Difficulty: {question.difficulty}</p>
            <p>Tags: {question.tags.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionBank;