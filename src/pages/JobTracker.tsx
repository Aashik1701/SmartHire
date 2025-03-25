import { useState } from 'react';
import JobTable from '../components/jobs/JobTable';
import JobForm from '../components/jobs/JobForm';
import JobStatistics from '../components/jobs/JobStatistics';

type JobStatus = 'Saved' | 'Applied' | 'Interview' | 'Offer' | 'Rejected';

interface Job {
  id: string;
  company: string;
  position: string;
  location: string;
  url?: string;
  status: JobStatus;
  appliedDate?: string;
  notes?: string;
  nextSteps?: string;
}

const JobTracker = () => {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: '1',
      company: 'TechCorp Inc.',
      position: 'Frontend Developer',
      location: 'Remote, US',
      url: 'https://example.com/job1',
      status: 'Interview',
      appliedDate: '2025-03-15',
      notes: 'Had a phone screening on March 20',
      nextSteps: 'Technical interview on March 28'
    },
    {
      id: '2',
      company: 'Global Solutions',
      position: 'Full Stack Engineer',
      location: 'New York, NY',
      url: 'https://example.com/job2',
      status: 'Applied',
      appliedDate: '2025-03-18',
      notes: 'Applied through company website',
      nextSteps: 'Wait for response'
    },
    {
      id: '3',
      company: 'Startup Innovation',
      position: 'React Developer',
      location: 'San Francisco, CA',
      url: 'https://example.com/job3',
      status: 'Saved',
      notes: 'Interesting opportunity with good benefits',
      nextSteps: 'Prepare resume and apply'
    }
  ]);

  const [isAddingJob, setIsAddingJob] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [filter, setFilter] = useState<JobStatus | 'All'>('All');

  const addJob = (job: Omit<Job, 'id'>) => {
    const newJob = {
      ...job,
      id: Date.now().toString(),
    };
    setJobs([...jobs, newJob]);
    setIsAddingJob(false);
  };

  const updateJob = (updatedJob: Job) => {
    setJobs(jobs.map(job => job.id === updatedJob.id ? updatedJob : job));
    setEditingJob(null);
  };

  const deleteJob = (id: string) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const filteredJobs = filter === 'All' 
    ? jobs 
    : jobs.filter(job => job.status === filter);

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Job Application Tracker</h1>
      
      <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-4">
        <JobStatistics jobs={jobs} />
      </div>
      
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Your Job Applications</h2>
            <p className="text-gray-600">Track and manage all your job applications in one place</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div>
              <label htmlFor="status-filter" className="sr-only">Filter by status</label>
              <select
                id="status-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value as JobStatus | 'All')}
                className="p-2 border border-gray-300 rounded-md"
              >
                <option value="All">All Applications</option>
                <option value="Saved">Saved</option>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            
            <button
              onClick={() => setIsAddingJob(true)}
              className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Add Job
            </button>
          </div>
        </div>
        
        <JobTable 
          jobs={filteredJobs} 
          onEdit={setEditingJob} 
          onDelete={deleteJob} 
        />
      </div>
      
      {isAddingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Add New Job</h2>
              <button onClick={() => setIsAddingJob(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <JobForm onSubmit={addJob} onCancel={() => setIsAddingJob(false)} />
          </div>
        </div>
      )}
      
      {editingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Edit Job</h2>
              <button onClick={() => setEditingJob(null)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <JobForm 
              job={editingJob} 
              onSubmit={updateJob} 
              onCancel={() => setEditingJob(null)} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default JobTracker;