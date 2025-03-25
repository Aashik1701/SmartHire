import { useState, useEffect } from 'react';

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

interface JobFormProps {
  job?: Job;
  onSubmit: (job: any) => void;
  onCancel: () => void;
}

const JobForm = ({ job, onSubmit, onCancel }: JobFormProps) => {
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    location: '',
    url: '',
    status: 'Saved' as JobStatus,
    appliedDate: '',
    notes: '',
    nextSteps: '',
  });

  useEffect(() => {
    if (job) {
      setFormData({
        company: job.company,
        position: job.position,
        location: job.location,
        url: job.url || '',
        status: job.status,
        appliedDate: job.appliedDate || '',
        notes: job.notes || '',
        nextSteps: job.nextSteps || '',
      });
    }
  }, [job]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(job ? { ...formData, id: job.id } : formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="position" className="block text-sm font-medium text-gray-700">
            Position *
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., Remote, New York, NY"
          />
        </div>
        
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">
            Job URL
          </label>
          <input
            type="url"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="https://example.com/job-listing"
          />
        </div>
        
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status *
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="Saved">Saved</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="appliedDate" className="block text-sm font-medium text-gray-700">
            Applied Date
          </label>
          <input
            type="date"
            id="appliedDate"
            name="appliedDate"
            value={formData.appliedDate}
            onChange={handleChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Add any relevant notes about the job or application"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="nextSteps" className="block text-sm font-medium text-gray-700">
          Next Steps
        </label>
        <textarea
          id="nextSteps"
          name="nextSteps"
          value={formData.nextSteps}
          onChange={handleChange}
          rows={2}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="What are your next steps for this application?"
        />
      </div>
      
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
        >
          {job ? 'Update Job' : 'Add Job'}
        </button>
      </div>
    </form>
  );
};

export default JobForm;