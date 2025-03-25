import { useState } from 'react';

interface AIAssistantPanelProps {
  section: string;
  onSuggestion: (section: string, suggestion: string) => void;
}

const AIAssistantPanel = ({ section, onSuggestion }: AIAssistantPanelProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const generateSuggestions = () => {
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      let newSuggestions: string[] = [];
      
      switch (section) {
        case 'basics':
          newSuggestions = [
            "Include a concise summary focusing on your career achievements and aspirations.",
            "Use a professional email address, preferably based on your name.",
            "Consider adding your LinkedIn profile URL in the website field."
          ];
          break;
        case 'work':
          newSuggestions = [
            "Use strong action verbs to begin each bullet point of your job description.",
            "Quantify your achievements with numbers when possible (e.g., 'Increased sales by 20%').",
            "Focus on achievements rather than just listing responsibilities."
          ];
          break;
        case 'education':
          newSuggestions = [
            "Include relevant coursework if you're a recent graduate.",
            "Mention academic honors, scholarships, or special achievements.",
            "If your GPA is 3.5 or higher, consider including it."
          ];
          break;
        case 'skills':
          newSuggestions = [
            "Group skills by categories (e.g., Programming Languages, Design Tools).",
            "Include both technical and soft skills relevant to your target role.",
            "Consider using proficiency levels (Beginner, Intermediate, Advanced)."
          ];
          break;
        case 'projects':
          newSuggestions = [
            "Include a link to the project if available (GitHub, live demo, etc.).",
            "Clearly explain the problem the project solved and your specific role.",
            "Highlight the technologies and methodologies used."
          ];
          break;
        default:
          newSuggestions = ["Select a section to get AI-powered suggestions."];
      }
      
      setSuggestions(newSuggestions);
      setIsLoading(false);
    }, 1000);
  };

  const applySuggestion = (suggestion: string) => {
    onSuggestion(section, suggestion);
  };

  return (
    <div className="p-6 rounded-lg shadow-md bg-blue-50">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">AI Assistant</h2>
        <button
          onClick={generateSuggestions}
          disabled={isLoading}
          className="px-3 py-1 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
        >
          {isLoading ? 'Generating...' : 'Get Suggestions'}
        </button>
      </div>
      
      <p className="mb-4 text-gray-600">
        Get AI-powered suggestions to improve your resume's {section} section.
      </p>
      
      {suggestions.length > 0 ? (
        <ul className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="p-3 bg-white rounded-md shadow-sm">
              <p className="mb-2 text-gray-800">{suggestion}</p>
              <button
                onClick={() => applySuggestion(suggestion)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Apply suggestion
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="py-6 text-center text-gray-500">
          {isLoading ? 'Analyzing your resume...' : 'Click "Get Suggestions" for AI-powered resume advice'}
        </div>
      )}
    </div>
  );
};

export default AIAssistantPanel;