import { useState } from 'react';
import ResumePreview from '../components/resume/ResumePreview';
import ResumeForm from '../components/resume/ResumeForm';
import AIAssistantPanel from '../components/resume/AIAssistantPanel';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    basics: {
      name: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      summary: ''
    },
    work: [{ company: '', position: '', startDate: '', endDate: '', description: '' }],
    education: [{ institution: '', area: '', studyType: '', startDate: '', endDate: '' }],
    skills: [{ name: '', level: '' }],
    projects: [{ name: '', description: '', technologies: '', url: '' }]
  });

  const [activeSection, setActiveSection] = useState('basics');

  const handleUpdateResume = (section: string, data: any) => {
    setResumeData({
      ...resumeData,
      [section]: data
    });
  };

  const handleAISuggestion = (section: string, suggestion: string) => {
    // This would integrate with an actual AI service
    alert(`AI suggestion for ${section}: ${suggestion}`);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">AI-Powered Resume Builder</h1>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
            <div className="flex border-b">
              {['basics', 'work', 'education', 'skills', 'projects'].map((section) => (
                <button
                  key={section}
                  className={`py-2 px-4 font-medium ${
                    activeSection === section
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="mt-6">
              <ResumeForm
                section={activeSection}
                data={resumeData[activeSection as keyof typeof resumeData]}
                onUpdate={(data) => handleUpdateResume(activeSection, data)}
              />
            </div>
          </div>
          
          <AIAssistantPanel 
            section={activeSection} 
            onSuggestion={handleAISuggestion} 
          />
        </div>
        
        <div className="sticky p-6 bg-white rounded-lg shadow-md h-fit top-6">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Resume Preview</h2>
          <ResumePreview data={resumeData} />
          
          <div className="flex mt-6 space-x-4">
            <button className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700">
              Save
            </button>
            <button className="px-4 py-2 text-white transition-colors bg-green-600 rounded-md hover:bg-green-700">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;