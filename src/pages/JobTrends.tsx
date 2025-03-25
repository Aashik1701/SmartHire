import { useState, useEffect } from 'react';

interface TrendData {
  title: string;
  change: number;
  description: string;
}

interface SalaryData {
  role: string;
  entrySalary: number;
  midSalary: number;
  seniorSalary: number;
}

const JobTrends = () => {
  const [trendData, setTrendData] = useState<TrendData[]>([]);
  const [salaryData, setSalaryData] = useState<SalaryData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setTrendData([
        {
          title: 'Artificial Intelligence',
          change: 35,
          description: 'Demand for AI specialists continues to grow as companies invest in machine learning and automation technologies.'
        },
        {
          title: 'Data Science',
          change: 28,
          description: 'Organizations are increasingly leveraging data to drive decision-making, creating opportunities for data scientists.'
        },
        {
          title: 'Cybersecurity',
          change: 42,
          description: 'With rising cyber threats, security professionals are in high demand across all industries.'
        },
        {
          title: 'Remote Work',
          change: 85,
          description: 'Remote job postings have significantly increased since 2020, with many companies adopting hybrid work models.'
        },
        {
          title: 'Cloud Computing',
          change: 31,
          description: 'Cloud professionals remain in high demand as businesses continue their digital transformation.'
        },
        {
          title: 'UX/UI Design',
          change: 24,
          description: 'User experience has become a priority for companies seeking to improve digital products and services.'
        },
      ]);
      
      setSalaryData([
        {
          role: 'Software Engineer',
          entrySalary: 75000,
          midSalary: 110000,
          seniorSalary: 160000
        },
        {
          role: 'Data Scientist',
          entrySalary: 85000,
          midSalary: 120000,
          seniorSalary: 170000
        },
        {
          role: 'UX Designer',
          entrySalary: 70000,
          midSalary: 95000,
          seniorSalary: 135000
        },
        {
          role: 'Product Manager',
          entrySalary: 90000,
          midSalary: 130000,
          seniorSalary: 180000
        },
        {
          role: 'DevOps Engineer',
          entrySalary: 85000,
          midSalary: 125000,
          seniorSalary: 165000
        },
      ]);
      
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Job Market Trends</h1>
      
      <div className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Growing Fields</h2>
        <p className="mb-6 text-gray-600">
          Stay informed about the fastest growing areas in the job market to position yourself for success.
        </p>
        
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
          {trendData.map((trend, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{trend.title}</h3>
                <span className="px-2 py-1 text-sm font-bold text-green-800 bg-green-100 rounded-full">
                  +{trend.change}%
                </span>
              </div>
              <p className="text-gray-600">{trend.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Salary Trends</h2>
        <p className="mb-6 text-gray-600">
          Compare average salaries across different roles and experience levels.
        </p>
        
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Entry Level</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Mid Level</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Senior Level</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {salaryData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{item.role}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">${item.entrySalary.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">${item.midSalary.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">${item.seniorSalary.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Skills in Demand</h2>
        <p className="mb-6 text-gray-600">
          Most sought-after skills by employers in the current job market.
        </p>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">Cloud Computing</span>
              <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">Machine Learning</span>
              <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">Data Analysis</span>
              <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">Python</span>
              <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">JavaScript</span>
              <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">React</span>
              <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">DevOps</span>
              <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">Cybersecurity</span>
              <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">SQL</span>
              <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">AWS</span>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full">Communication</span>
              <span className="px-3 py-1 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full">Problem Solving</span>
              <span className="px-3 py-1 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full">Adaptability</span>
              <span className="px-3 py-1 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full">Collaboration</span>
              <span className="px-3 py-1 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full">Time Management</span>
              <span className="px-3 py-1 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full">Leadership</span>
              <span className="px-3 py-1 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full">Creativity</span>
              <span className="px-3 py-1 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full">Critical Thinking</span>
              <span className="px-3 py-1 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full">Emotional Intelligence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTrends;