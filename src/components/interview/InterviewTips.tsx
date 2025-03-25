const InterviewTips = () => {
  const generalTips = [
    {
      title: 'Research the company',
      description: 'Review the company website, social media profiles, and recent news to understand their values, culture, and industry position.',
    },
    {
      title: 'Prepare for common questions',
      description: 'Practice your answers to common interview questions like "Tell me about yourself" and "Why do you want to work here?"',
    },
    {
      title: 'Use the STAR method',
      description: 'Structure your responses to behavioral questions with Situation, Task, Action, and Result to provide comprehensive answers.',
    },
    {
      title: 'Prepare questions for the interviewer',
      description: 'Have thoughtful questions ready that demonstrate your interest in the role and company.',
    },
    {
      title: 'Dress professionally',
      description: 'Choose appropriate attire for the company culture, but err on the side of more professional if unsure.',
    },
    {
      title: 'Arrive early',
      description: 'Plan to arrive 10-15 minutes before your scheduled interview time.',
    },
    {
      title: 'Bring copies of your resume',
      description: 'Have printed copies of your resume, portfolio, and any other relevant documents.',
    },
    {
      title: 'Be mindful of body language',
      description: 'Maintain good posture, make eye contact, and offer a firm handshake to convey confidence.',
    },
  ];

  const technicalTips = [
    {
      title: 'Practice coding problems',
      description: 'For technical roles, practice solving coding problems on platforms like LeetCode or HackerRank.',
    },
    {
      title: 'Review core concepts',
      description: 'Refresh your understanding of fundamental concepts related to your field.',
    },
    {
      title: 'Think aloud',
      description: 'During technical problems, explain your thought process to show how you approach challenges.',
    },
    {
      title: 'Review your own projects',
      description: 'Be prepared to discuss your past projects in detail, including challenges and solutions.',
    },
  ];

  const virtualTips = [
    {
      title: 'Test your technology',
      description: 'Check your internet connection, camera, and microphone before the interview.',
    },
    {
      title: 'Find a quiet location',
      description: 'Choose a quiet setting with a neutral background and good lighting.',
    },
    {
      title: 'Eliminate distractions',
      description: 'Close unnecessary applications, silence your phone, and inform others not to disturb you.',
    },
    {
      title: 'Maintain virtual eye contact',
      description: 'Look at the camera, not the screen, to create the impression of eye contact.',
    },
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-xl font-semibold text-gray-800">General Interview Tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {generalTips.map((tip, index) => (
            <div key={index} className="p-4 transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md">
              <h3 className="mb-2 text-lg font-medium text-gray-800">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Technical Interview Tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {technicalTips.map((tip, index) => (
            <div key={index} className="p-4 transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md">
              <h3 className="mb-2 text-lg font-medium text-gray-800">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Virtual Interview Tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {virtualTips.map((tip, index) => (
            <div key={index} className="p-4 transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md">
              <h3 className="mb-2 text-lg font-medium text-gray-800">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="p-6 rounded-lg bg-blue-50">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">Pro Tip: Follow Up</h2>
        <p className="text-gray-700">
          Send a thank-you email within 24 hours of your interview. Express your appreciation for the opportunity,
          reaffirm your interest in the position, and briefly reference something specific from your conversation.
        </p>
      </section>
    </div>
  );
};

export default InterviewTips;